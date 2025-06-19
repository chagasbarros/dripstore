import { useState } from "react";
import FormaPagamento from "./FormaPagamento";
import {useForm} from "../contexts/FormContext"
import { useNavigate } from "react-router-dom";

const PerfilPagamento = ({perfil}) => {

  const {formDados, setFormDados} = useForm() 
  const navigate = useNavigate() 
  
  const usuarioLocal = JSON.parse(localStorage.getItem('usuario'))
  const id = usuarioLocal.id

    const dadosCartao = {
    ...formDados.cartao,
    id_usuario: id
  }
  const [pagamentoNovo, setPagamentoNovo] = useState('pagamentoExistente')

  const adicionarPagamento = ()=> {setPagamentoNovo('pagamentoNovo')}
  const cancelarPagamento = ()=> {setPagamentoNovo('pagamentoExistente')}

  async function salvarPagamento() {
   try {
     await fetch('http://localhost:3000/adicionarPagamento', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosCartao)
      
    })
      alert("Cartão adicionado com sucesso")
      navigate('/DripStore')
    
   } catch (erro) {
    console.error("Erro ao adicionar cartão", erro)
   }
  }


  async function excluirCartao(id) {
    console.log("id do cartao", id)
    try {
      const resposta= await fetch(`http://localhost:3000/deletarPagamento/${id}`, {
        method: 'DELETE'
      })

      if(resposta.ok){
        alert('cartão deletado')
      }else {
        console.log('Erro ao deletar o cartão')
      }
      
    } catch (error) {
      console.log('Cartão não foi deletado', error)
    }
    
  }
    return (
      <section className="bg-white col-8">
        {pagamentoNovo === "pagamentoExistente" && (
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
              {perfil.map((item) => (
                <ul key={item.id_cartao} className="navbar-nav mb-3">
                  <li>Nome do Cartão: {item.nomeCartao}</li>
                  <li>
                    Final do Cartão: **** **** ****{" "}
                    {item.numeroCartao.slice(-4)}
                  </li>
                  <button
                    className="btn btn-dark"
                    onClick={() => excluirCartao(item.id_cartao)}
                  >
                    Excluir
                  </button>
                </ul>
              ))}
            </div>
          </div>
        )}

        {pagamentoNovo === "pagamentoNovo" && (
          <div>
            <div>
              <FormaPagamento
                formDados={formDados}
                setFormDados={setFormDados}
              />
            </div>
            <div className="d-flex gap-3 justify-content-end me-5">
              <button className="btn btn-warning" onClick={cancelarPagamento}>
                Cancelar
              </button>
              <button className="btn btn-success" onClick={salvarPagamento}>
                Salvar
              </button>
            </div>
          </div>
        )}
      </section>
    );
        
    
}

export default PerfilPagamento