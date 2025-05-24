
const FormaPagamento = ({ formDados, setFormDados}) => {

  const handleMetodoChange = (e) => {
    const metodoSelecionado = e.target.value
    setFormDados((prev) => ({
      ...prev,
      pagamento: {
        ...prev.pagamento,
        metodo: metodoSelecionado        
      }
    }))
  }

const metodo = formDados.pagamento.metodo

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
              name="metodo"
              id="cartao"
              value="cartao"
              checked={formDados.pagamento.metodo === "cartao"}
              onChange={handleMetodoChange}
              
            />
            <label htmlFor="cartao">Cartão de Crédito ou Débito</label>
          </div>

          <div className="d-flex gap-2">
            <input
              type="radio"
              name="metodo"
              id="pix"
              value="pix"
              checked={formDados.pagamento.metodo === "pix"}
              onChange={handleMetodoChange}
              
            />
            <label htmlFor="pix">Pix</label>
          </div>

          <div className="d-flex gap-2">
            <input
              type="radio"
              name="metodo"
              id="boleto"
              value="boleto"
              checked={formDados.pagamento.metodo === 'boleto'}
              onChange={handleMetodoChange}
              
            />
            <label htmlFor="boleto">Boleto</label>
          </div>
        </div>

        <div>
          {metodo === "cartao" && (
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
                <div className="d-flex flex-column flex-md-row justify-content-between">
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

          {metodo === 'boleto' && (
              <div className='mt-5'>
                 
                  <h3 className='text-center'>O <strong>boleto </strong> será gerado após a finalização do cadastro.</h3>                  
              </div>
          )}

          {metodo === 'pix' && (
             <div className='mt-5'>
                  <h3 className='text-center'>O <strong>QR CODE </strong> será gerado após a finalização do cadastro.</h3>
              </div>
          )}
        </div>
    </div>
  </div>
  );
}

export default FormaPagamento