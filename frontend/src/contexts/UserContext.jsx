import React from 'react'
import { createContext, useState } from 'react'

export const UserContext = createContext(null)

export const UserProvider = ({children}) => {

    const [user, setUser] = useState({
        nome:'',
        email:'',
        idade:'',
        cpf_cnpj : ''
    })
    return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
)}