import {createContext} from 'react'
import {useState} from "react";

//contexts are an alternative way to share states among components and avoid props drilling
export const UsuarioContext = createContext();

UsuarioContext.displayName = "UsuarioContext" //display name is how the context we be shown in the browser console

//here we define the states we wish to be controlled/shared through context inside a component
export const UsuarioProvider = ({children}) => {
    const [nome, setNome] = useState('')
    const [saldo, setSaldo] = useState(0)
    return (
        //Context.Provider is the channel to share the states, added in the value attr.
        //Any component encased by UsuarioProvider will be added in the {children} call and
        //will have access to the states
        <UsuarioContext.Provider value={{nome, setNome, saldo, setSaldo}}>
            {children}
        </UsuarioContext.Provider>
    )
}