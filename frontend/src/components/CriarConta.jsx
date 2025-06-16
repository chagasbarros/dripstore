import FormaPagamento from "./FormaPagamento"
import FormCep from "./FormCep"
import FormDadosPessoais from "./FormDadosPessoais"
import styles from './FormCadastro.module.css'
import {useForm} from '../contexts/FormContext'
import Acesso from "./Acesso"
import { useNavigate } from "react-router-dom"
//oi
const CriarConta = () => {

    const {formDados, setFormDados} = useForm()
    const navigate = useNavigate()

    async function enviarDados(event){
      event.preventDefault()
      const dadosEnviados = await fetch('http://localhost:3000/cadastrarUsuario', 
        {method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formDados)
        })
        if(dadosEnviados.ok){
          console.log('Usuário cadastrado com sucesso!')
          console.log(formDados)
          setFormDados({
            usuario: {
              nome: '',
              cpf: '',
              email: '',
              celular: ''
            },
            entrega: {
              cep: '',
              rua: '',
              bairro: '',
              cidade: '',
              complemento: ''
            },
            cartao: {
              nomeCartao: '',
              numeroCartao: '',
              validade: '',
              cvv: ''
            },
            senha: ''
          })
          navigate('/DripStore/login')
        }else{
          const erro = await dadosEnviados.json()
          alert(`Erro ao cadastrar usuário: ${erro.msg}`)
        }
    }

    return (
        <>
        <form className={styles.backgroundFormulario}>
          <div className={`container ${styles.conteudoForm}`}>
            <h2 className="fw-bold mt-5 ms-2">Criar Conta</h2>
            <div className='row'>
              <fieldset className="col-12">
                <FormDadosPessoais formDados={formDados} setFormDados={setFormDados} />
                <FormCep formDados={formDados} setFormDados={setFormDados} />
                <FormaPagamento formDados={formDados} setFormDados={setFormDados} />
                <Acesso formDados={formDados} setFormDados={setFormDados}/> 
              </fieldset>
              <div className="d-flex align-items-center mb-2">
                  <input 
                      type="checkbox"  
                      id="checkCriarConta" 
                      name="checkCriarConta"
                      className={`${styles.customInput2}`}                           
                    /> 
                 <label 
                      
                      htmlFor="checkCriarConta" 
                  >
                    Quero receber email com ofertas e novidades da loja da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.
                </label>
            </div>
                <button 
                    onClick={enviarDados}
                    className="btn text-white fw-bold p-2 mb-5" 
                    style={{ backgroundColor: "#d10f7d" }}
                    type="submit"
                >
                  Criar Conta
                </button>
            </div>
          </div>
        </form>
        </>
    )
    }

export default CriarConta;