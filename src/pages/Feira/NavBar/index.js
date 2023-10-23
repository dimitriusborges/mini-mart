import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import {useCarrinhoContext} from "../../../common/context/Carrinho";

export default function NavBar() {
    const {carrinhoQtd} = useCarrinhoContext()
    return (
    <Nav>
      <Logo />
      <IconButton
          disabled={carrinhoQtd === 0}
      >
        <Badge
          color="primary"
          badgeContent={carrinhoQtd}
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
    )
}