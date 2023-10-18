import { Button } from '@material-ui/core';
import {
  Container,
  Titulo,
  InputContainer
} from './styles';
import {
  Input,
  InputLabel,
  InputAdornment 
} from '@material-ui/core';
import {useHistory} from 'react-router-dom'

import {UsuarioContext} from "../../common/context/Usuario";
import {useContext} from "react";


function Login() {
    const history = useHistory()
    //to use a context, we call the hook useContext and pass the context obj as its param
    //then we can use it just like a state defined inside the component.
    //an alternative would be using Context.Consumer encasing the whole component. Not nice
    const {nome, setNome, saldo, setSaldo} = useContext(UsuarioContext)
    return (
    <Container>
        <Titulo>
          Insira o seu nome
        </Titulo>
        <InputContainer>
          <InputLabel>
            Nome
          </InputLabel>
          <Input value={nome}
                 onChange={(evt) => setNome(evt.target.value)}
                 type="text"
          />
        </InputContainer>
        <InputContainer>
          <InputLabel>
            Saldo
          </InputLabel>
          <Input
              value={saldo}
              onChange={(evt) => setSaldo(evt.target.value)}
              type="number"
              startAdornment={
                <InputAdornment position="start">
                  R$
                </InputAdornment>
              }
          />
        </InputContainer>
        <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/feira")}
        >
          Avançar
        </Button>
    </Container>
  )
};

export default Login;