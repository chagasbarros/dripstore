import adereco from "../assets/cartaoLogo/adereco.png"
import styles from './FormCadastro.module.css'
import FormSucessoResumo from "./FormSucessoResumo"

const FormSucesso = () => {

    return(
        <div className={styles.backgroundFormulario}>
            <div className={styles.backgroundConteudo}>
                <div className="p-5">
                    <section className="text-center">
                        <img src={adereco} alt="imagem de festa" />
                        <h3 className="mt-4">Compra realizada com sucesso</h3>
                    </section>
                    <hr />

                    <section>
                        <h5>Informações Pessoais</h5>
                        <p>Nome:</p>
                        <p>CPF:</p>
                        <p>Email:</p>
                        <p>Celular</p>
                    </section>
                    <hr />

                    <section>
                        <h5>Informações de Entrega</h5>
                        <p>Endereço: </p>
                        <p>Bairro:</p>
                        <p>Cidade:</p>
                        <p>CEP:</p>
                    </section>
                    <hr />

                    <section>
                        <h5>Informações de Pagamento</h5>
                        <p>Titular do Cartão: </p>
                        <p>Final</p>
                    </section>
                    <hr />

                    <FormSucessoResumo/>

                </div>
               
            </div>
            

        </div>
     
    
    )
}

export default FormSucesso