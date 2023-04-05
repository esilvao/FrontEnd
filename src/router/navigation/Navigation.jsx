
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form, Button } from 'react-bootstrap';
import logoEmpresa from '../../assets/LogoEmpresa.jpg';

const Navigation = () => {

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
            <NavDropdown title="Admin Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item  as={NavLink} to='/admin/nuevoproducto'>Crear Productos</NavDropdown.Item>
              <NavDropdown.Item  as={NavLink} to='/admin/editarproducto'>Editar Productos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
            
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" style={{ backgroundColor: 'white' }}>Search</Button>
          </Form>

          <Nav>
          <NavDropdown title="Hola, Inicia Sesión" id="collasible-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/login'>Iniciar session</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/registro'>Registro de Usuario</NavDropdown.Item>
              <NavDropdown.Item  as={NavLink} to='/perfilusuario'>Perfil de Usuario</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link eventKey={2} href="#memes">
              Carro de compras
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Navigation