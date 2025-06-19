import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"

const PerfilPessoal = ({perfil}) => {

  const [carregado, setCarregado] = useState(false)
  useEffect(() => {
    if (perfil && perfil.length > 0) {
      setNome(perfil[0].nome);
      setCpf(perfil[0].cpf_cnpj);
      setEmail(perfil[0].email);
      setTelefone(perfil[0].telefone);
      setRua(perfil[0].rua);
      setBairro(perfil[0].bairro);
      setCidade(perfil[0].cidade);
      setCep(perfil[0].cep);
      setCarregado(true)
    }
  }, [perfil]);

  const navigate = useNavigate()  
  const [modoEdicao, setModoEdicao] = useState("editar");
  const editarInformacoes = () => {
    setModoEdicao("salvar");
  };
  const cancelarEdicao = () => setModoEdicao("editar");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");

  const [mensagemErro, setMensagemErro] = useState('')


  async function salvarAlteracao() {

    if(!carregado) return

  const usuarioLocal = JSON.parse(localStorage.getItem('usuario'))
  const id = usuarioLocal.id  

  const campos = {
    nome,
    cpf, 
    email,
    telefone,
    rua,
    bairro,
    cidade,
    cep
  }

  for (const [campo, valor] of Object.entries(campos)) {
    if(!valor.trim()) {
      setMensagemErro(`O campo "${campo.toUpperCase()}" é obrigatório`)
      return
    }
  }

  try {
     const resposta = await fetch(`http://localhost:3000/alterarInformacoes/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome: nome,
      cpf: cpf,
      email: email,
      telefone: telefone,
      rua: rua,
      bairro: bairro,
      cidade: cidade,
      cep: cep
    })
  })


  if(resposta.ok) {
    console.log('Enviado com sucesso:')
    navigate('/DripStore')
  }else{
    console.error('Erro ao enviar dados')
  }
    
  } catch (erro) {
    console.error('Erro de rede:', erro)
  }
 
    
  }

    return (
      <div>
        <section className="bg-white p-5 col-8">

          {modoEdicao === "editar" && (
            <div>
              <div className="d-flex justify-content-between">
                <h5>Minhas Informações</h5>
                <button
                  className="btn btn-pink text-white fw-bold"
                  style={{ backgroundColor: "#d10f7d" }}
                  onClick={editarInformacoes}
                >
                  editar
                </button>
              </div>
              <div>
                <h5>Informações Pessoais</h5>
                <ul className="navbar-nav">
                  <li>Nome: {perfil[0].nome}</li>

                  <li>CPF: {perfil[0].cpf_cnpj}</li>

                  <li>Email: {perfil[0].email}</li>

                  <li>Celular: {perfil[0].telefone}</li>
                </ul>

                <hr />
              </div>

              <div>
                <h5>Informações de Entrega</h5>
                <ul className="navbar-nav">
                  <li>Endereço: {perfil[0].rua}</li>
                  <li>Bairro: {perfil[0].bairro} </li>
                  <li>Cidade: {perfil[0].cidade} </li>
                  <li>CEP: {perfil[0].cep}</li>
                </ul>
              </div>
            </div>
          )}

          {modoEdicao === "salvar" && (
            <div>
              <div className="d-flex justify-content-between">

                <h5>Alterar Informações</h5>

                <button className="btn btn-warning text-white fw-bold" onClick={cancelarEdicao}>
                  Cancelar
                </button>

                <button className="btn btn-success text-white fw-bold" onClick={salvarAlteracao}>
                  Salvar
                </button>
              </div>
              <hr />
              {mensagemErro && (
                <p style={{color: 'red'}}>{mensagemErro}</p>
              )}
              <label htmlFor="name" className="form-label">
                Nome:
              </label>
              <input
                type="text"
                name="name"
                value={nome}
                onChange={(e) => setNome(e.target.value) }
                className="form-control "
                // placeholder={perfil[0].nome}
                required
              />
              {console.log(nome)}
              <label htmlFor="cpf">CPF:</label>
              <input
                type="text"
                name="cpf"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                className="form-control"
                placeholder={perfil[0].cpf_cnpj}
                required
              />
              {console.log(cpf)}

              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder={perfil[0].email}
                required
              />
              

              <label htmlFor="celular">Celular:</label>
              <input
                type="text"
                name="celular"
                value={telefone}
                onChange={(e)=> setTelefone(e.target.value)}
                className="form-control"
                placeholder={perfil[0].telefone}
                required
              />
             

              <h5 className="mt-5">Informações de Entrega</h5>
              <hr className="my-4" />
              <label htmlFor="endereco">Endereço</label>
              <input
                type="text"
                name="endereco"
                value={rua}
                onChange={(e)=> setRua(e.target.value)}
                className="form-control"
                placeholder={perfil[0].rua}
                required
              />
             

              <label htmlFor="bairro">Bairro:</label>
              <input
                type="text"
                name="bairro"
                value={bairro}
                onChange={(e)=> setBairro(e.target.value)}
                className="form-control"
                placeholder={perfil[0].bairro}
                required
              />
              

              <label htmlFor="cidade">Cidade:</label>
              <input
                type="text"
                name="cidade"
                value={cidade}
                onChange={(e)=> setCidade(e.target.value)}
                className="form-control"
                placeholder={perfil[0].cidade}
                required
              />

              <label htmlFor="cep">CEP:</label>
              <input
                type="text"
                name="cep"
                value={cep}
                onChange={(e)=> setCep(e.target.value)}
                className="form-control"
                placeholder={perfil[0].cep}
                required
              />
            </div>
          )}
        </section>
      </div>
    );
}

export default PerfilPessoal