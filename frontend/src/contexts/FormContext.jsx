import { createContext, useContext, useState } from "react";

const FormContext = createContext()

export const FormProvider = ({ children }) => {
    const [formDados, setFormDados] = useState({
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

    return (

        <FormContext.Provider value={{formDados, setFormDados}}>
            {children}
        </FormContext.Provider>
    )
}

// useForm → hook personalizado para acessar formDados e setFormDados com segurança.
export const useForm = () => {
    const context = useContext(FormContext)
    if(!context) {
        throw new Error("useForm deve ser usado dentro de um FormProvider");
        
    }

    return context
}