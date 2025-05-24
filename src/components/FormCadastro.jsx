import styles from "./FormCadastro.module.css";
import Sneakers from "../assets/finalizarCompra/Sneakers.svg";
import FormaPagamento from "./FormaPagamento";
import FormCep from "./FormCep";
import FormDadosPessoais from "./FormDadosPessoais";
import FormResumo from "./FormResumo";

const FormCadastro = () => {
  return (
    <>
      <div className={`${styles.backgroundFormulario} ${styles.conteudoForm} `}>
    

        <form>
          <div className="container">
            <h2 className="fw-bold mt-2 ms-2">Finalizar Compra</h2>
            <div className="row">
              <fieldset className="col-sm-12 col-md-7">
                <FormDadosPessoais />
                <FormCep />
                <FormaPagamento />
                <div className="d-block d-md-none">
                  <FormResumo/>
                </div>
                
                <div className="bg-white my-3 mb-2 d-flex flex-column p-5">
                          <hr />
                          <div className="d-flex justify-content-between mb-5">
                            <div>
                              <h3>Total</h3>
                            </div>
                            <div>
                              <p className="m-0 text-end text-danger ">R$: 219,00</p>
                              <small className="opacity-50">
                                ou 10x de R$: 21,00 sem juros
                              </small>
                            </div>
                          </div>
                          <button
                            className="btn btn-warning text-white fw-bold p-2 mb-5"
                            type="submit"
                          >
                            Realizar Pagamento
                          </button>
                        </div> 
              </fieldset>
              <fieldset className="col-md-5 d-none d-md-block">
                <FormResumo/>
              </fieldset>
              
              
            </div>
          </div>
        </form>

        <form action=""></form>
      </div>
    </>
  );
};

export default FormCadastro;
