const PerfilPessoal = ({perfil}) => {
    return <div>
        <section className="bg-white p-5 col-8">
              <div className="d-flex justify-content-between">
                <h6>Minhas Informações</h6>
                <button
                  className="btn btn-pink text-white fw-bold"
                  style={{ backgroundColor: "#d10f7d" }}
                >
                  Editar
                </button>
              </div>
              <hr />
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
            </section>
    </div>
}

export default PerfilPessoal