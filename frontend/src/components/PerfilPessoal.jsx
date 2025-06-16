import { useState } from "react"

const PerfilPessoal = ({perfil}) => {
  const [editar, setEditar] = useState(perfil)
  const idPerfil = 8
  const [modoEdicao, setModoEdicao] = useState("salvar")

  

    



    return <div>
        <section className="bg-white p-5 col-8">
              <div className="d-flex justify-content-between">
                <h5>Minhas Informações</h5>
                <button
                  className="btn btn-pink text-white fw-bold"
                  style={{ backgroundColor: "#d10f7d" }}

                >
                editar
                </button>
              </div>
              <hr />

              {modoEdicao === "editar" && (
                <div>
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
                  <label htmlFor="name" className="form-label">Nome:</label>
                  <input type="text" name="name" value={onchange} className="form-control " />
                
                  <label htmlFor="cpf">CPF:</label>
                  <input type="text" name="cpf" value={onchange} className="form-control" />

                  <label htmlFor="email">Email:</label>
                  <input type="text" name="email" value={onchange} className="form-control" />

                  <label htmlFor="celular">Celular:</label>
                  <input type="text" name="celular" value={onchange} className="form-control" />

                  

                <h5 className="mt-5">Informações de Entrega</h5>
                <hr className="my-4" />
                  <label htmlFor="endereco">Endereço</label>
                  <input type="text" name="endereco" value={onchange} className="form-control" />

                  <label htmlFor="bairro">Bairro:</label>
                  <input type="text" name="bairro" value={onchange} className="form-control" />

                  <label htmlFor="cidade">Cidade:</label>
                  <input type="text" name="cidade" value={onchange} className="form-control" />

                  <label htmlFor="cep">CEP:</label>
                  <input type="text" name="cep" value={onchange} className="form-control" />


                </div>
              )}
              
            </section>
    </div>
}

export default PerfilPessoal