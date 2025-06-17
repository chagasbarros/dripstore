import { useState } from "react";
import FormaPagamento from "./FormaPagamento";

const PerfilPagamento = ({perfil}) => {

  const [pagamentoNovo, setPagamentoNovo] = useState('pagamentoExistente')

  const adicionarPagamento = ()=> {setPagamentoNovo('pagamentoNovo')}
  const cancelarPagamento = ()=> {setPagamentoNovo('pagamentoExistente')}
    return (
      <section className="bg-white col-8">

        {pagamentoNovo === 'pagamentoExistente' && (
          <div>
            <div className="d-flex justify-content-between">
          <h6>Métodos de pagamento</h6>
          <button
            className="btn btn-pink text-white fw-bold"
            style={{ backgroundColor: "#d10f7d" }}
            onClick={adicionarPagamento}
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
              <button className="btn btn-dark" >excluir</button>
            </ul>
            
          ))}
        </div>
          </div>
        )}

        {pagamentoNovo === 'pagamentoNovo' && (
          <div>
            <div>
              <FormaPagamento/>
            </div>
             <div className="d-flex gap-3 justify-content-end me-5">
              <button className="btn btn-warning" onClick={cancelarPagamento}>Cancelar</button>
              <button className="btn btn-success">Salvar</button>
            </div>
          </div>
        )}
        
      </section>
    );
        
    
}

export default PerfilPagamento