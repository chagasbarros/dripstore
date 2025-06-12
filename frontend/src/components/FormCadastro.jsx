import FormaPagamento from "./FormaPagamento";
import FormCep from "./FormCep";
import FormDadosPessoais from "./FormDadosPessoais";
import FormResumo from "./FormResumo";
import {useNavigate} from 'react-router-dom'
import styles from './FormCadastro.module.css'
import {useForm} from '../contexts/FormContext'
//oi
const FormCadastro = () => {

  const {formDados, setFormDados} = useForm()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
      e.preventDefault()
      console.log('Dados do formulário: ', formDados)
      navigate('/DripStore/Sucesso')
  }


  return (
    <>
        <form onSubmit={handleSubmit} className={styles.backgroundFormulario}>
          <div className={`container ${styles.conteudoForm}`}>
            <h2 className="fw-bold mt-5 ms-2">Finalizar Compra</h2>
            <div className='row'>
              <fieldset className="col-sm-12 col-md-7">
                <FormDadosPessoais formDados={formDados} setFormDados={setFormDados} />
                <FormCep formDados={formDados} setFormDados={setFormDados} />
                <FormaPagamento formDados={formDados} setFormDados={setFormDados} />
                <div className="d-block d-md-none">
                  <FormResumo formDados={formDados} setFormDados={setFormDados}/>
                </div>
                <div className="bg-white my-3 mb-2 d-flex flex-column p-5">
                          <hr />
                          <div className="d-flex justify-content-between mb-5">
                            <div>
                              <h3>Total</h3>
                            </div>
                            <div>
                              <p className="m-0 text-end text-danger ">R$: 180,00</p>
                              <small className="opacity-50">
                                ou 10x de R$: 18,00 sem juros
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
    </>
  );
};

export default FormCadastro;
