import { useContext } from "react"
import UserContext from "../../context/user/UserContext"
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";


const PerfilUsuario = () => {


  const { infoUser ,editarUser } = useContext(UserContext)
  const { nombre, isAdmin, apellido, telefono, email, imagen, password } = infoUser

  const userValorInicial = {
    email: email,
    password: password,
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    imagen: imagen

  }
  const [userValue, setUserValue] = useState(userValorInicial)
  const [editable, setEditable] = useState(false);

  const handleValueChange = async(e) => {
    setUserValue({
      ...userValue,
      [e.target.name]: e.target.value
    })
  }


  const handleEditar = () => {
    setEditable(!editable);
  };
  
  const handleGuardar = () => {
    editarUser(userValue)
  };


  return (
    <>

      <Container className="mt-5 mb-5 me-3 ms-3">
        <Row>
          <Col>
            <Container>
              <Row>
                <Col >
                  <div className="d-inline-flex"> 
                  {editable ? <h4   className="mr-2 text-success" expand="lg"> {isAdmin ? "Editar: Administrador" : "Editar: Cliente"}   </h4>: <h4 className="mr-2 "> {isAdmin ? "Perfil: Administrador" : "Perfil: Cliente"} </h4>} 
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Text className="text-muted">Nombre :</Form.Text>
                  <Form.Control type="text" readOnly={!editable} onChange={handleValueChange} placeholder="Nombre" name="nombre" value={userValue.nombre} />
                </Col>
                <Col>
                  <Form.Text className="text-muted">Apellido :</Form.Text>
                  <Form.Control type="text" readOnly={!editable}  onChange={handleValueChange}  placeholder="Apellido" name="apellido" value={userValue.apellido} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Text className="text-muted">Email:ejemplo@gmail.com</Form.Text>
                  <Form.Control type="email" readOnly={!editable} onChange={handleValueChange}   placeholder="Enter email" name="email" value={userValue.email}></Form.Control>

                </Col>
                <Col>
                  <Form.Text className="text-muted">Nro de Telefono</Form.Text>
                  <Form.Control type="text" readOnly={!editable}  onChange={handleValueChange}  placeholder="Nro de Telefono" name="telefono" value={userValue.telefono} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Text className="text-muted">Foto / imagen</Form.Text>
                  <Form.Control type="text" readOnly={!editable} onChange={handleValueChange}   placeholder="Foto / imagen" name="email" value={userValue.imagen}></Form.Control>
                </Col>

              </Row>

            </Container>
          </Col>
          <Col>
            <div className="d-flex justify-content-center">
              <img src={imagen} height='300' alt='Perfil de usuario' />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          {!editable ?   <Button onClick={handleEditar}>Editar</Button> :  <Button variant="success" onClick={handleGuardar}>Guardar</Button>}

          </Col>
        </Row>

      </Container>


    </>
  )
}



export default PerfilUsuario