import styles from './FormCadastro.module.css'
import Sneakers from "../assests/finalizarCompra/Sneakers.svg"
import FormaPagamento from './FormaPagamento';


const FormCadastro = () => {
  
    return (
      <>
        <div
          className={`${styles.backgroundFormulario} ${styles.conteudoForm} `}
        >
          <h2 className="fw-bold mt-2">Finalizar Compra</h2>

          <form>
            <div className="container">
              <div className="row">
                <fieldset className="col-7">
                  <div className="bg-white mt-4 d-flex flex-column p-5 form-group">
                    <h5>Informações Pessoais</h5>
                    <hr />

                    <label htmlFor="nome">Nome Completo *</label>
                    <input
                      className='form-control opacity-50'
                      type="text"
                      name="nome"
                      id="nome"
                      required
                      placeholder="Insira seu nome"
                      minLength="10"
                      maxLength="50"
                    />

                    <label htmlFor="cpf">CPF *</label>
                    <input
                      className='form-control opacity-50'
                      type="text"
                      name="cpf"
                      id="cpf"
                      required
                      placeholder="Insira seu CPF"
                      pattern="[0-9]{1,11}"
                      minLength={11}
                      maxLength={11}
                    />

                    <label htmlFor="email">Email *</label>
                    <input
                      className='form-control opacity-50'
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="Insira seu email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      minLength="10"
                      maxLength="50"
                    />

                    <label htmlFor="celular">Celular *</label>
                    <input
                      className='form-control opacity-50'
                      type="tel"
                      name="celular"
                      id="celular"
                      required
                      placeholder="Insira seu Número"
                      minLength={9}
                      maxLength={9}

                    />
                  </div>

                  <FormCep/>

                  
                  <FormaPagamento/>

                  <div className="bg-white my-3 mb-2 d-flex flex-column p-5">
        <h3>Finalizar Compra</h3>
        <hr />
        <div className="d-flex justify-content-between mb-5">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <p className="m-0 text-end text-danger ">R$: 219,00</p>
            <small className="opacity-50">ou 10x de R$: 21,00 sem juros</small>
          </div>
        </div>
        <button
          className="btn btn-warning text-white fw-bold p-2 mb-5"
          type="submit">
          Realizar Pagamento
        </button>
      </div>

                  
                </fieldset>

                <fieldset className="col-5 bg-white d-flex flex-column p-5 mt-4">
                  <h3>Resumo</h3>
                  <hr />
                  <div className='d-flex align-items-center gap-3'>
                    <div className={styles.imgResumo}><img src={Sneakers} alt="img de tenis" /></div>
                    <div><p>Tênis Nike Revolution 6 Next Nature Masculino</p></div>
                  </div>
                  
                  <hr />

                  <div className='d-flex justify-content-between'>
                    <div>
                        <p className='opacity-50'>subtotal:</p>
                        <p className='opacity-50'>Frete:</p>
                        <p className='opacity-50'>Desconto: </p>
                    </div>
                    <div>
                        <p>R$: 219,00</p>
                        <p>R$: 0,00</p>
                        <p>R$: 30,00</p>
                    </div>
                  </div>

                  <div className={styles.resumoTotal}>
                    <div>
                        <h3>Total </h3>
                    </div>
                    <div>
                        <p className='m-0 text-end h3 fw-semibold'>R$: 219,00</p>
                        <small className='opacity-50'>ou 10x de R$: 21,00 sem juros</small>
                    </div>
                    
                  </div>

                  <button className='btn btn-warning text-white fw-bold p-2 ' type="submit">Realizar Pagamento</button>
                </fieldset>
              </div>
            </div>
          </form>

          <form action=""></form>
        </div>
      </>
    );
}

export default FormCadastro;