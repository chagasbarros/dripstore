import { useState, useEffect } from "react"
import { useForm } from "../contexts/FormContext"

const Acesso = () => {
    //oi
    const { setFormDados } = useForm()
    const [senha, setSenha] = useState('')
    const [repitaSenha, setRepitaSenha] = useState('')
    const [erro, setErro] = useState('')

    // Verificação em tempo real das senhas
    useEffect(() => {
        if (senha && repitaSenha) {
        if (senha === repitaSenha) {
            setErro('')
            setFormDados((prev) => ({
            ...prev,
             senha: senha
        }))
      } else {
        setErro('As senhas não coincidem')
      }
    } else {
      setErro('')
    }
  }, [senha, repitaSenha, setFormDados])

    return(
        <>
            <div className="bg-white p-5 d-flex flex-column my-3">

                <h5>Criar senha</h5>
                <label htmlFor="senha">Digite a senha</label>
                <input onChange={(e) => {setSenha(e.target.value)}} className='form-control opacity-50' type="password" name="senha" id="senha" placeholder="Insira a senha" required/>

                <label htmlFor="RepitaSenha">Repita a senha</label>
                <input onChange={(e) => {setRepitaSenha(e.target.value)}} className='form-control opacity-50' type="password" name="RepitaSenha" id="RepitaSenha" placeholder="Repita a senha" required/>
                {<p style={{color: 'red'}}>{erro}</p>}
            </div>
        </>
    )
}

export default Acesso;