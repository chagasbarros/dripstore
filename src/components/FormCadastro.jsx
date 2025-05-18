import styles from './FormCadastro.module.css'
import Sneakers from "../assests/finalizarCompra/Sneakers.svg"
import barras from "../assests/finalizarCompra/barras.svg"

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

                  <div className="bg-white my-3 mb-2 d-flex flex-column p-5">
                    <h5>Informações de Entrega</h5>
                    <hr />

                    <label htmlFor="cep">CEP *</label>
                    <input
                      className='form-control opacity-50'
                      type="number"
                      name="cep"
                      id="cep"
                      required
                      placeholder="Insira seu CEP sem o traço"
                      pattern="[0-9]{1,8}"
                      minLength={8}
                      maxLength={8}
                    />

                    <label htmlFor="endereco">Endereco *</label>
                    <input
                      className='form-control opacity-50'
                      type="text"
                      name="endereco"
                      id="endereco"
                      required
                      placeholder="Insira seu endereço"
                      minLength="10"
                      maxLength="80"
                    />

                    <label htmlFor="bairro">Bairro *</label>
                    <input
                      className='form-control opacity-50'
                      type="text"
                      name="bairro"
                      id="bairro"
                      required
                      placeholder="Insira seu bairro"
                      minLength="5"
                      maxLength="20"
                    />

                    <label htmlFor="cidade">Cidade *</label>
                    <input
                      className='form-control opacity-50'
                      type="text"
                      name="cidade"
                      id="cidade"
                      required
                      placeholder="Insira sua cidade"
                      minLength="5"
                      maxLength="20"
                    />

                    <label htmlFor="complemento">Complemento</label>
                    <input
                      className='form-control opacity-50'
                      type="text"
                      name="complemento"
                      id="complemento"
                      placeholder="Insira complemento"
                      minLength="5"
                      maxLength="20"
                    />
                  </div>

                  <div className="bg-white my-3 mb-2 d-flex flex-column p-5 gap-2">
                    <h3>Informações de Pagamento</h3>
                    <hr />

                    <h4>Forma de pagamento</h4>
                    <div className="d-flex gap-5 mb-2">
                      <div className="d-flex gap-2">
                        <input type="radio" name="pagamento" id="cartao"/>
                        <label htmlFor="cartao">
                          Cartão de Crédito ou Débito
                        </label>
                      </div>

                      <div className="d-flex gap-2">
                        <input type="radio" name="pagamento" id="pix" />
                        <label htmlFor="pix">Pix</label>
                      </div>

                      <div className="d-flex gap-2">
                        <input type="radio" name="pagamento" id="boleto"/>
                        <label htmlFor="boleto">Boleto</label>
                      </div>
                    </div>
                    
                    {/* CARD DE FORMA DE PAGAMENTO (cartão de crédito)*/}

                    <div className='d-none'>
                        <label htmlFor="nomeCartao">Nome do Cartão *</label>
                        <input
                          className='form-control opacity-50'
                          type="number"
                          name="nomeCartao"
                          id="nomeCartao"
                          required
                          placeholder='Insira o nome do Cartão'
                        />

                    <div className="mt-3 ">
                      <div className='d-flex justify-content-between'>
                        <div>
                          <label htmlFor="numeroCartao">
                            Numero do Cartão *
                          </label>
                          <input
                            className='form-control opacity-50'
                            type="number"
                            name="numeroCartao"
                            id="numeroCartao"
                            required
                            placeholder='Insira o numero do Cartão'
                          />
                        </div>
                        <div>
                          <label htmlFor="validadeCartao">
                            Data de validade do Cartão
                          </label>
                          <input
                            className='form-control opacity-50'
                            type="date"
                            name="validadeCartao"
                            id="validadeCartao"
                            required
                            placeholder='Insira a validade do Cartão'
                          />
                        </div>
                      </div>
                      
                    </div>
                      <label htmlFor="ccv"> CVV *</label>
                      <input type="number" name="ccv" id="ccv" required placeholder='Insira o CVV' className='form-control opacity-50' />
                    </div>
                    {/* CARD DE FORMA DE PAGAMENTO (BOLETO) */}
                    <div className="d-none">

                        <div>
                            <img src="" alt="logo da empresa" />
                        </div>

                        <div className='d-flex flex-column gap-1'>
                            <label htmlFor="pagador">Pagador</label>
                            <input type="text" name='pagador' id='pagador' className='form-control opacity-50' />

                            <label htmlFor="dataVencimento">Data de vencimento</label>
                            <input type="date"  name='dataVencimento' id='dataVencimento' className='form-control opacity-50'/>

                            <label htmlFor="valorTotal">Valor a pagar</label>
                            <input type="number" name="valorTotal" id="valorTotal" className='form-control opacity-50' />
                            
                        </div>
                    
                        <div className='mt-5'>
                             <p>Código de Barras</p>
                            <hr />
                            <img src={barras} alt="Uma imagem de código de barras"/>
                            <button className='btn btn-warning d-block'>Copiar código</button>
                        </div>
                  </div>

                  </div>

                  
                  <div className="bg-white my-3 mb-2 d-flex flex-column p-5">
                    <h3>Finalizar Compra</h3>
                    <hr />
                    <div className='d-flex justify-content-between mb-5'>
                        <div>
                            <h3>Total</h3>
                        </div>
                        <div>
                            <p className='m-0 text-end text-danger '>R$: 219,00</p>
                            <small className='opacity-50'>ou 10x de R$: 21,00 sem juros</small>
                        </div>
                    </div>
                    <button className='btn btn-warning text-white fw-bold p-2 mb-5' type="submit">Realizar Pagamento</button>
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