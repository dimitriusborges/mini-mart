import {createContext, useContext} from 'react'
import {useState} from "react";


export const PagamentoContext = createContext()

PagamentoContext.displayName = 'PagamentoContext'

export const PagamentoProvider = ({children}) => {
    const tiposPagamento = [
        {
            nome: "Boleto",
            juros: 1,
            id: 1
        },
        {
            nome: "Cartão de Crédito",
            juros: 1.3,
            id: 2
        },
        {
            nome: "PIX",
            juros: 1,
            id:3
        }
    ]

    const[formaPagamento, setFormaPagamento] = useState(tiposPagamento[0])

    return (
        <PagamentoContext.Provider value={{tiposPagamento, formaPagamento, setFormaPagamento}}>
            {children}
        </PagamentoContext.Provider>
    )
}

export const usePagamentoContext = () => {
    const {tiposPagamento, formaPagamento, setFormaPagamento} = useContext(PagamentoContext)

    function mudarFormaPagamento(id){
        const pagamentoSelecionado = tiposPagamento.find(tipo => tipo.id === id)

        setFormaPagamento(pagamentoSelecionado)
    }

    return {
        tiposPagamento,
        formaPagamento,
        mudarFormaPagamento
    }
}
