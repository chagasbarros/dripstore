const InformacaoPerfil = () => {
    return(
        <div>
            <section className="bg-white p-5 col-8 ">
              <div className="d-flex justify-content-between">
                <h6>Informações de Perfil</h6>
                <button
                  className="btn btn-pink text-white fw-bold"
                  style={{ backgroundColor: "#d10f7d" }}
                >
                  Alterar
                </button>
              </div>
              <hr />
              <div className="container">
                <h4 className="mb-3">Alterar Senha</h4>
                <div className="row">
                  <div className="col-6">
                  <label htmlFor="" className="form-label"> Digite nova Senha: </label>
                  <input type="password" name="" id="" className="form-control" placeholder="Digite nova senha" />
                </div>
                <div className="col-6">
                  <label htmlFor="" className="form-label"> Repita nova Senha: </label>
                  <input type="password" name="" id="" className="form-control" placeholder="Repita nova senha" />
                </div>
                </div>
                <div className="mt-4">
                  <span>Data de criação da Conta:</span> 
                </div>
              </div>
            </section>
        </div>
    )
}

export default InformacaoPerfil