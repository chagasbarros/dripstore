import express from 'express'
import cors from 'cors'
import mysql from 'mysql2/promise'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'

dotenv.config()
const senhaJWT = process.env.JWT

const conexao = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

const porta = process.env.DB_PORTA


const app = express()
app.use(cors())
app.use(express.json())


function autenticarUsuario(req, res, next){
   const token = req.headers.authorization?.split(' ')[1]
   if (!token){
    return res.status(401).json({msg: 'token não fornecido'})
   }
   try{
    const usuario = jwt.verify(token, senhaJWT)
    req.usuario = usuario
    next()
   }catch(error){
    return res.status(403).json({msg:'Token invalido'})
   }
}


// Rotas APIs
app.get('/dadosAdm', autenticarUsuario, (req, res) => {
  if (req.usuario.tipo !== 1) {
    return res.status(403).json({ msg: 'Acesso restrito a administradores' });
  }
  return res.send(`Bem-vindo, administrador ${req.usuario.nome}`);
});

app.get('/usuarios', async (req, res) => {
  try {
    const [rows] = await conexao.execute('SELECT * FROM usuarios');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao buscar usuários');
  }
});

// Rotas da página de perfil do cliente

app.get('/perfil/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const [rows] = await conexao.execute(
      `SELECT 
  u.id AS id_usuario,
  u.nome,
  u.email,
  u.senha,
  u.data_cadastro,
  u.id_roles,
  u.cpf_cnpj,
  u.telefone,

  e.cep,
  e.rua,
  e.bairro,
  e.cidade,

  p.id AS id_cartao,
  p.nomeCartao,
  p.numeroCartao,
  p.cvv,
  p.validade

FROM usuarios u
JOIN enderecos e ON u.id = e.id_usuario
LEFT JOIN pagamento p ON u.id = p.id_usuario
WHERE u.id = ?;

`,
      [id]
    );
    res.json(rows)
  } catch (error) {
    console.error(error)
    res.status(500).send('Erro ao buscar usuários')
  }
})


app.put("/alterarSenha/:id", async (req, res) => {
  const { id } = req.params;
  const { senha } = req.body;
  const senhaCriptografada = await bcrypt.hash(senha, 10)

  try {
    const [resultado] = await conexao.execute(
      `UPDATE usuarios SET senha = ? WHERE id = ?`,
      [senhaCriptografada, id]
    );
    
    if (resultado.affectedRows === 0) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
    }

    res.json({ mensagem: 'Usuário atualizado com sucesso.' });
  } catch (error) {
    console.error(error)
    res.status(500).json({ mensagem: 'Erro ao atualizar senha'})
  }
});

app.put("/alterarInformacoes/:id", async(req, res)=>{

  const bdPromise = await conexao.getConnection()
  const { id } = req.params
  const {nome, cpf, email, telefone, rua, bairro, cidade, cep} = req.body
  console.log(nome, cpf, email, telefone, rua, bairro, cidade, cep)
  try {
    await bdPromise.beginTransaction()

    await bdPromise.execute(
      `UPDATE usuarios SET nome = ?, cpf_cnpj = ?, email = ?, telefone = ? WHERE id = ?`,
      [nome, cpf, email, telefone, id]
    )

    await bdPromise.execute(
      `UPDATE enderecos SET rua = ?, bairro = ?, cidade = ?, cep = ? WHERE id_usuario = ?`,
      [rua, bairro, cidade, cep, id]
    )
    
    await bdPromise.commit()
    res.status(200).json({ mensagem: 'Informações atualizadas com sucesso!'})

  } catch (error) {
    await bdPromise.rollback()
    console.error(error)
    res.status(500).json({ mensagem: 'Erro ao atualizar informações'})
    
  }
})

app.post("/adicionarPagamento", async (req, res) => {
  const { nomeCartao, numeroCartao, cvv, id_usuario, validade } = req.body;
  console.log(nomeCartao, numeroCartao, cvv, id_usuario, validade)

  try {
    const [resultado] = await conexao.execute(
      "INSERT INTO pagamento (nomeCartao, numeroCartao, cvv, id_usuario, validade) VALUES (?, ?, ?, ?, ?)",
      [nomeCartao, numeroCartao, cvv, id_usuario, validade]
    );
    res.status(201).json({ mensagem: "Pagamento cadastrado com sucesso"})
  } catch (error) {
    console.error(error)
    res.status(500).json({ mensagem: "Erro no Servidor"})
  }
});

app.delete("/deletarPagamento/:id", async (req, res)=>{
  const  id = req.params.id
  console.log(id)
  try {
    const [resultado] = await conexao.execute('DELETE FROM pagamento WHERE id = ?', [id] )
    
    if(resultado.affectedRows > 0 ) {
      res.status(200).json({ mensagem: 'Cartão deletado com sucesso'})
    }else {
      res.status(404).json({ mensagem: 'cartão não encontrado'})
    }
    
  } catch (error) {
    console.error(error)
    res.status(500).json({ mensagem: "Erro ao Deletar"})
  }
})

//Rota para cadastrar usuário da página cadestre-se
app.post('/cadastrarUsuario', async (req, res) => {
  const { usuario, senha} = req.body

  if (!usuario || !senha || !usuario.nome || !usuario.email) {
    return res.status(400).json({ msg: 'Dados incompletos para cadastro' });
  }

  try{
    const senhaCriptografada = await bcrypt.hash(senha, 10)
    
    const sql = `INSERT INTO usuarios (nome, email, senha, cpf_cnpj, telefone) VALUES (?, ?, ?, ?, ?)`
    const valores = [usuario.nome, usuario.email, senhaCriptografada, usuario.cpf, usuario.celular]

    await conexao.query(sql, valores)

    res.status(201).json({ msg: 'usuário cadastrado com sucesso!'})
  }catch(erro){
    console.error(erro)
    res.status(500).json({ errp: 'Erro ao cadastrar usuário'})
  }
})


//Rota da página de login
app.post('/verificarLogin', async (req, res) => {
  const { email, senha } = req.body;
  console.log({ email, senha });

  try {
    // Busca o usuário apenas pelo email
    const sql = 'SELECT * FROM usuarios WHERE email = ?';
    const [rows] = await conexao.query(sql, [email]);

    if (rows.length === 0) {
      return res.status(401).json({ sucesso: false, mensagem: 'Email ou senha inválidos' });
    }

    const usuario = rows[0];

    // Compara a senha digitada com o hash do banco
    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

    if (!senhaCorreta) {
      return res.status(401).json({ sucesso: false, mensagem: 'Email ou senha inválidos' });
    }

    // Gera o token JWT
    const token = jwt.sign({
      id: usuario.id,
      nome: usuario.nome,
      tipo: usuario.id_roles
    }, senhaJWT, {
      expiresIn: '1h'
    });

    res.status(200).json({
      sucesso: true,
      usuario,
      token
    });

  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: 'Erro no servidor' });
  }
});


// Rotas da pagina de listagem

app.get('/produtos', async (req, res) => {
  try { const [rows] = await conexao.execute ('SELECT * FROM produtos')
    res.json(rows)
    
  } catch (error) { 
    console.error(error)
    res.status(500).send('Erro ao buscar produtos')
    
  }
});

app.post('/produtos', async (req, res) => {
  try {
    const { nome, descricao, preco, categoria, estoque, imagem } = req.body;
    
    // Validação básica
    if (!nome || !descricao || !preco || !categoria || !estoque) {
      return res.status(400).json({ 
        erro: 'Campos obrigatórios: nome, descricao, preco, categoria, estoque' 
      });
    }

    // URL padrão para imagem se não fornecida
    const imagemUrl = imagem || 'https://via.placeholder.com/300';

    // Inserir produto no banco
    const [result] = await conexao.execute(
  'INSERT INTO produtos (nome, descricao, preco, categoria, quantidade_estoque, imagem) VALUES (?, ?, ?, ?, ?, ?)',
  [nome, descricao, parseFloat(preco), categoria, parseInt(estoque), imagemUrl]
    );

    


    // Buscar o produto inserido para retornar
   const [rows] = await conexao.execute(
  'SELECT * FROM produtos WHERE id = ?',
  [result.insertId]
);

    res.status(201).json({
      mensagem: 'Produto criado com sucesso',
      produto: rows[0]
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao criar produto' });
  }
});


app.get('/produtos/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const [rows] = await conexao.execute('SELECT * FROM produtos WHERE id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ msg: "Produto não encontrado" });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Erro no servidor" });
  }
});

app.listen(porta, () => {
    console.log('O servidor está rodando na porta 3000')
})