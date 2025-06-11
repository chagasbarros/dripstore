import express from 'express'
import cors from 'cors'
import mysql from 'mysql2/promise'
import jwt from 'jsonwebtoken'

const senhaJWT = '1234'


const conexao = await mysql.createConnection({
    host: '184.72.192.43',
    user: 'geracao',
    password: 'MySql@Equipe2024!',
    database: 'dripstore'
})

const porta = 3000


const app = express()
app.use(cors())
app.use(express.json())





app.get('/usuarios', async (req, res) => {
  try {
    const [rows] = await conexao.execute('SELECT * FROM usuarios');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao buscar usuários');
  }
});

app.post('/verificarLogin', async (req, res) => {
  const { email, senha } = req.body;
  console.log({ email, senha });

  const sql = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';

  try {
    const [rows] = await conexao.query(sql, [email, senha]);

    if (rows.length > 0) {
      const usuario = rows[0];

      const token = jwt.sign({
        id: usuario.id,
        nome: usuario.nome,
        tipo: usuario.id_roles
      }, senhaJWT, {
        expiresIn: '1h'
      });

      res.status(200).json({ 
    sucesso: true, 
    usuario: rows[0],
    token: token 
  });
    } else {
      res.status(401).json({ sucesso: false, mensagem: 'Email ou senha inválidos' });
    }

    console.log(rows);

  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: 'Erro no servidor' });
  }
});






app.listen(porta, () => {
    console.log('O servidor está rodando na porta 3000')
})