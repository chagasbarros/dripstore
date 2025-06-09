const Acesso = () => {
    return(
        <>
            <div className="bg-white p-5 d-flex flex-column my-3">

                <h5>Criar senha</h5>
                <label htmlFor="senha">Digite a senha</label>
                <input className='form-control opacity-50' type="text" name="senha" id="senha" placeholder="Insira a senha" />

                <label htmlFor="RepitaSenha">Repita a senha</label>
                <input className='form-control opacity-50' type="text" name="RepitaSenha" id="RepitaSenha" placeholder="Repita a senha" />
            </div>
        </>
    )
}

export default Acesso;