import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"


const PerfilInformacao = ({perfil}) => {
const navigate = useNavigate()

const dataCadastro = perfil[0].data_cadastro
const dataCriaçao = new Date(dataCadastro).toLocaleDateString()

const [senha, setSenha] = useState('')
const [repitaSenha, setRepitaSenha] = useState('')
const [mensagemErro, setMensagemErro] = useState('')

const usuarioLocal = JSON.parse(localStorage.getItem('usuario'))
const idUsuario = usuarioLocal.id


async function alterarSenha() {

  if(!senha.trim() || !repitaSenha.trim()){
    setMensagemErro('Preencha todo os campos da senha')
    return
  }
  if(senha !== repitaSenha){
    setMensagemErro('As senhas não coincidem')
    return
  }
  setMensagemErro('')

  const senhaAlterada = await fetch(`http://localhost:3000/alterarSenha/${idUsuario}`,{
    method: 'PUT',
    headers: { 
      'Content-Type':'application/json'
    }, 
    body: JSON.stringify({ senha: repitaSenha})
  })
  if(senhaAlterada.ok) {
    alert('Senha Alterada com sucesso')
    navigate('/Dripstore')
  }else{
    console.log('Erro ao alterar senha') 
  }
  
}

    return (
      <div>
        <section className="bg-white p-5 col-8 ">
          <div className="d-flex justify-content-between">
            <h6>Informações de Perfil</h6>
            <button
              className="btn btn-pink text-white fw-bold"
              style={{ backgroundColor: "#d10f7d" }}
              onClick={alterarSenha}
            >
              Alterar
            </button>
          </div>
          <hr />
          <div className="container">
            <h4 className="mb-3">Alterar Senha</h4>

            <div className="row">
              <div className="col-6">
                <label htmlFor="novaSenha" className="form-label">
                  {" "}
                  Digite nova Senha:{" "}
                </label>
                <input
                  type="password"
                  name="novaSenha"
                  id="novaSenha"
                  className="form-control"
                  placeholder="Digite nova senha"
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>

              <div className="col-6">
                <label htmlFor="repitaSenha" className="form-label">
                  {" "}
                  Repita nova Senha:{" "}
                </label>
                <input
                  type="password"
                  name="repitaSenha"
                  id="repitaSenha"
                  className="form-control"
                  placeholder="Repita nova senha"
                  onChange={(e) => {
                      setRepitaSenha(e.target.value)
                      setMensagemErro('')
                  }}
                />
                {mensagemErro && (
                  <p style={{color: 'red'}}>{mensagemErro}</p>
                )}
                
              </div>
            </div>

            <div className="mt-4">
              <span>Data de criação da Conta: {dataCriaçao}</span>
            </div>
          </div>
        </section>
      </div>
    );
}

export default PerfilInformacao