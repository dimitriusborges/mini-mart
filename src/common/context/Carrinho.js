import {createContext, useContext, useEffect} from 'react'
import {useState} from "react";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "CarrinhoContext"

export const CarrinhoProvider = ({children}) => {
    const [carrinho, setCarrinho] = useState([])
    const [carrinhoQtd, setCarrinhoQtd] = useState(0)
    return (
        <CarrinhoContext.Provider value={{carrinho, setCarrinho, carrinhoQtd, setCarrinhoQtd}}>
            {children}
        </CarrinhoContext.Provider>
    )
}

//Creating this object is a way encapsulate behaviors/features (like addProduto) inside
// the context. To use, we just import the useCarrinhoContext in the desired component.
// The component will be able to use the context and its behavior without directly importing
// useContext
export const useCarrinhoContext = () => {
    const{carrinho, setCarrinho, carrinhoQtd, setCarrinhoQtd} = useContext(CarrinhoContext)

    function addProduto(novoProduto){

        const produtoExiste = carrinho.some(itemCarrinho => itemCarrinho.id === novoProduto.id)

        if(!produtoExiste){
            novoProduto.quantidade = 1;
            return setCarrinho(carrinhoAnterior =>
                [...carrinhoAnterior, novoProduto])
        }

        setCarrinho(carrinhoAnterior => carrinhoAnterior.map(item => {
            if(item.id === novoProduto.id){
                item.quantidade +=1
            }
            return item
        }))
    }

    function removeProduto(id){
        const removeProduto = carrinho.find(itemCarrinho => itemCarrinho.id === id)

        if(!removeProduto){
            return
        }

        const ultimo = removeProduto.quantidade === 1

        if(ultimo){
            return setCarrinho(carrinhoAnterior =>
                carrinhoAnterior.filter(itemCarrinho => itemCarrinho.id !== id))
        }

        setCarrinho(carrinhoAnterior => carrinhoAnterior.map(item => {
            if(item.id === id){
                item.quantidade -=1
            }
            return item
        }))
    }

    useEffect(() => {
        const novaQtd = carrinho.reduce((contador, produto) => contador + produto.quantidade, 0);
        setCarrinhoQtd(novaQtd)
    }, [carrinho, setCarrinhoQtd])

    return {
        carrinho, setCarrinho, addProduto, removeProduto, carrinhoQtd
    }


}

