const PerfilPagamento = ({perfil}) => {
    return (
      <section className="bg-white p-5 col-8">
        <div className="d-flex justify-content-between">
          <h6>Métodos de pagamento</h6>
          <button
            className="btn btn-pink text-white fw-bold"
            style={{ backgroundColor: "#d10f7d" }}
          >
            Adicionar
          </button>
        </div>
        <hr />
        <div>
          <h5>Informações de pagamento</h5>
          {perfil[0].cartoes.split(" | ").map((nomeCartao, index) => (
            <ul key={index} className="navbar-nav mb-3">
              <li>Nome do Cartão: {nomeCartao}</li>
              <li>
                Final do Cartão: **** **** ****{" "}
                {perfil[0].numerosCartoes.split(" | ")[index].slice(-4)}
              </li>
            </ul>
          ))}
        </div>
      </section>
    );
        
    
}

export default PerfilPagamento