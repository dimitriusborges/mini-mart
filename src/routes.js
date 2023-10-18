import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from "./pages/Login";
import Feira from "./pages/Feira";
import Carrinho from "./pages/Carrinho";
import {UsuarioProvider} from "./common/context/Usuario";

export default function Router(){
    return (
        <BrowserRouter>
            <Switch>
                <UsuarioProvider>{/*Encasing the components we wish to grant access to the context*/}
                    <Route exact path="/">
                           <Login/>
                    </Route>
                    <Route path="/feira">
                        <Feira/>
                    </Route>
                </UsuarioProvider>
                <Route path="/carrinho">
                    <Carrinho/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}