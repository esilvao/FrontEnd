import { useContext } from "react"
import UserContext from "../../context/user/UserContext"
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, Button } from "react-bootstrap";

const PerfilUsuario = () => {
  const {infoUser} = useContext(UserContext)
  

   const { nombre , isAdmin, apellido,telefono,email,imagen} = infoUser

  return (
    <>

      <Container className="mt-5 mb-5 me-3 ms-3">
        <Row>
          <Col>
            <Container>
            <Row>
              <Col>
              <div>
          {isAdmin ?  <h2>  Administrador</h2> : <h2> Cliente</h2>}
        </div>
        </Col>
        </Row>
        <Row>
        <Col>
        <Form.Text className="text-muted">Nombre :</Form.Text>
          <Form.Control  type="text" disabled readOnly placeholder="Nombre"  name="nombre" value={nombre} />
        </Col>
        <Col>
        <Form.Text className="text-muted">Apellido :</Form.Text>
          <Form.Control type="text" disabled readOnly placeholder="Apellido"  name="apellido" value={apellido} />
        </Col>
        </Row>
        <Row>
        <Col>
        <Form.Text className="text-muted">Email:ejemplo@gmail.com</Form.Text>
        <Form.Control type="email" disabled readOnly  placeholder="Enter email"  name="email" value={email}></Form.Control>
       
        </Col>
        <Col>
        <Form.Text className="text-muted">Nro de Telefono</Form.Text>
        <Form.Control type="text"  disabled readOnly placeholder="Nro de Telefono"   name="telefono" value={telefono}/>
          
        </Col>
        </Row>

            </Container>
          </Col>
          <Col>
            <div className="d-flex justify-content-center">
              <img  src={imagen} height='300' alt='Perfil de usuario' /> 
            </div>
        </Col>
        </Row>
        <Row>
          <Col>
          <Button>Editar</Button>
          </Col>
        </Row>
      
      </Container>
      

    </>
  )
}



export default PerfilUsuario