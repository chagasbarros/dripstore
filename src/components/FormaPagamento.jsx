import React, { useState } from 'react';
import barras from "../assets/finalizarCompra/barras.svg"
import logoPix from "../assets/finalizarCompra/logoPix.png"
import qrCode from "../assets/finalizarCompra/qrCode.png"

function FormaPagamento() {
  const [formaPagamento, setFormaPagamento] = useState('');

  return (
    <div>
      <div className="bg-white my-3 mb-2 d-flex flex-column p-5 gap-2">
        <h3>Informações de Pagamento</h3>
        <hr />

        <h4>Forma de pagamento</h4>
        <div className="d-flex flex-column flex-md-row gap-5 mb-2">
          <div className="d-flex gap-2">
            <input
              type="radio"
              name="pagamento"
              id="cartao"
              value="cartao"
              onChange={(e) => setFormaPagamento(e.target.value)}
            />
            <label htmlFor="cartao">Cartão de Crédito ou Débito</label>
          </div>

          <div className="d-flex gap-2">
            <input
              type="radio"
              name="pagamento"
              id="pix"
              value="pix"
              onChange={(e) => setFormaPagamento(e.target.value)}
            />
            <label htmlFor="pix">Pix</label>
          </div>

          <div className="d-flex gap-2">
            <input
              type="radio"
              name="pagamento"
              id="boleto"
              value="boleto"
              onChange={(e) => setFormaPagamento(e.target.value)}
            />
            <label htmlFor="boleto">Boleto</label>
          </div>
        </div>

        <div>
          {formaPagamento === "cartao" && (
            <div>
              <label htmlFor="nomeCartao">Nome do Cartão *</label>
              <input
                className="form-control opacity-50"
                type="number"
                name="nomeCartao"
                id="nomeCartao"
                required
                placeholder="Insira o nome do Cartão"
              />

              <div className="mt-3 ">
                <div className="d-flex justify-content-between">
                  <div>
                    <label htmlFor="numeroCartao">Numero do Cartão *</label>
                    <input
                      className="form-control opacity-50"
                      type="number"
                      name="numeroCartao"
                      id="numeroCartao"
                      required
                      placeholder="Insira o numero do Cartão"
                    />
                  </div>
                  <div>
                    <label htmlFor="validadeCartao">
                      Data de validade do Cartão
                    </label>
                    <input
                      className="form-control opacity-50"
                      type="date"
                      name="validadeCartao"
                      id="validadeCartao"
                      required
                      placeholder="Insira a validade do Cartão"
                    />
                  </div>
                </div>
              </div>
              <label htmlFor="ccv"> CVV *</label>
              <input
                type="number"
                name="ccv"
                id="ccv"
                required
                placeholder="Insira o CVV"
                className="form-control opacity-50"
              />
            </div>
          )}

          {formaPagamento === 'boleto' && (
              <div>
                 
                  <div className="d-flex flex-column gap-1">
                    <label htmlFor="pagador">Pagador</label>
                    <input
                      type="text"
                      name="pagador"
                      id="pagador"
                      className="form-control opacity-50"
                    />

                    <label htmlFor="dataVencimento">Data de vencimento</label>
                    <input
                      type="date"
                      name="dataVencimento"
                      id="dataVencimento"
                      className="form-control opacity-50"
                   />

                    <label htmlFor="valorTotal">Valor a pagar</label>
                    <input
                      type="number"
                      name="valorTotal"
                      id="valorTotal"
                      className="form-control opacity-50"
                    />
                  </div>

                  <div className="mt-5">
                    <p>Código de Barras</p>
                    <hr />
                    <img src={barras} alt="Uma imagem de código de barras" />
                    <button className="btn btn-warning text-white fw-bold p-2 d-block">
                      Copiar código
                    </button>
                  </div>
              </div>
          )}

          {formaPagamento === 'pix' && (
             <div className="">
                  <div className="d-flex justify-content-between">
                      <div>
                        <img src={logoPix} alt="logo do pix" />
                      </div>
                      <div>
                        <img src={qrCode} width={175} alt="Imagem de QR Code" />
                      </div>
                  </div>
                  <div className="text-center">
                      <h5>Código de pagamento</h5>
                      <p>
                        Escanei o QR Code ou Copie e cole o código abaixo no app da sua
                        instituição financeira pra finalizar a compra.
                      </p>
                      <p>Valor do pagamento</p>
                      <h3>R$ 219,00</h3>
                      <p>"7777geracao9999tech1111projeto0000drip2222Store"</p>
                      <button className="btn btn-warning text-white fw-bold p-2">
                          Copiar código
                      </button>
                  </div>
              </div>
          )}
        </div>
    </div>
  </div>
  );
}

export default FormaPagamento