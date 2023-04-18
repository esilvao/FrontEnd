
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form, Button } from 'react-bootstrap';
import logoEmpresa from '../../assets/LogoEmpresa.jpg';
import { useContext } from 'react';
import UserContext from '../../context/user/UserContext'
import CartContext from '../../context/cart/CartContext';
import CartIcon from "../../components/cartModal/cartIcon/CartIcon";
import CartDropDown from "../../components/cartModal/cartDropdown/CartDropDown"

const Navigation = () => {

  const {infoUser,authStatus,cerrarSession} = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)
  
let nombreUsuario="";
   const { nombre , isAdmin } = infoUser
   if (!authStatus) {
    nombreUsuario="Iniciar Session"
   }else{
   nombreUsuario=nombre
  
  }

  return (
    <div>    

     <Navbar collapseOnSelect expand="lg" className="bg-success bg-gradient" variant="dark">
      <Container>
        <Navbar.Brand href="/">
           <img
              src={logoEmpresa}
              height='40'
              alt='Mareli'
              loading='lazy'/>
                MARELI </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/listaproductos' >Catalogo</Nav.Link>
            <Nav.Link as={NavLink} to='/detalleproducto' ></Nav.Link>
            {isAdmin && (<NavDropdown title="Admin Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item  as={NavLink} to='/admin/nuevoproducto'>Crear Productos</NavDropdown.Item>
              <NavDropdown.Item  as={NavLink} to='/admin/editarproducto'>Editar Productos</NavDropdown.Item>
            </NavDropdown>)}
          </Nav>
            
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="secondary" >Buscar</Button>
          </Form>

          <Nav>
          <NavDropdown title={nombreUsuario} id="collasible-nav-dropdown"> 
              {!authStatus && (<NavDropdown.Item as={NavLink} to='/login'>Iniciar session</NavDropdown.Item>)}
              {authStatus && (<NavDropdown.Item  as={NavLink} to='/perfilusuario'>Perfil de Usuario</NavDropdown.Item>)}
              {authStatus && (<NavDropdown.Item  as={NavLink} to='/perfilusuario'>Seguimiento de Compras</NavDropdown.Item>)}
              {authStatus && (<NavDropdown.Item  as={NavLink} to='/perfilusuario'>Historial de Compras</NavDropdown.Item>)}
              
            </NavDropdown>
            {authStatus && ( <Button variant="dark"  size="sm" onClick={cerrarSession}>Salir</Button> )}
            <Nav.Link as={NavLink} to='/checkout' >Bolsa de Campras</Nav.Link>
            <CartIcon />
            {isCartOpen && <CartDropDown />}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Navigation