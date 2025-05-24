

const FormDadosPessoais = () => {
    
    return (
        <>
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
                      minLength={11}
                      maxLength={11}

                    />
                  </div>

        </>
    )
}

export default FormDadosPessoais