import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from "./pages/Login";
import Feira from "./pages/Feira";
import Carrinho from "./pages/Carrinho";
import {UsuarioProvider} from "./common/context/Usuario";
import {CarrinhoProvider} from "./common/context/Carrinho";
import {PagamentoProvider} from "./common/context/Pagamento";

export default function Router(){
    return (
        <BrowserRouter>
            <Switch>
                <UsuarioProvider>{/*Encasing the components we wish to grant access to the context*/}
                    <Route exact path="/">
                        <Login/>
                    </Route>
                    <CarrinhoProvider>
                        <PagamentoProvider>
                            <Route path="/feira">
                                <Feira/>
                            </Route>
                            <Route path="/carrinho">
                                <Carrinho/>
                            </Route>
                        </PagamentoProvider>
                    </CarrinhoProvider>
                </UsuarioProvider>

            </Switch>
        </BrowserRouter>
    )
}