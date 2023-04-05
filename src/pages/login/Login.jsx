import {Row,Col,Container} from 'react-bootstrap'
import logoEmpresa from "../../assets/LogoEmpresa.jpg";
import '../../pages/login/Login.css'
import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import { useContext } from 'react';
import UserContext from '../../context/user/UserContext'


const Login = () => {

  const userValorInicial = {
    email: "",
    password: ""
  }
  const {msg} = useContext(UserContext)

  const  [user,setUser] = useState(userValorInicial)

  const cambiodatos = (e) => {
    e.preventDefault();
   setUser((previo) => ({
    ...previo,
    [e.target.name]: e.target.value

   }))

  }

  
  console.log(user)
 // const iamgen2="https://images.unsplash.com/photo-1610100926890-26d130f677a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIzfHxyb3BhJTIwZGUlMjBtb2RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
  return (
    <>
    
    
    <Container>
      <Row>
        <Col className="carrusel-imagen"> <CarrucelLogin /></Col>
        <Col  className="mt-5 mb-5 ">
        <div class=" d-flex justify-content-center">
          <img  src={logoEmpresa} height='200' alt='Mareli' /> 
        </div>
      <div>{msg}</div>
        <div class="p-3 mb-2  bg-secondary text-white  d-flex justify-content-center">Ingresar con tu cuenta para acceder a descuentos y promociones</div>
          <div ClassName="bg-success ">
              
              <form >
                <input className='d-flex justify-content-center mb-3 mt-3' type="text" name="email" value={user.email} placeholder="ejemplo@gmail.com" onChange={cambiodatos}></input>
                
                <input className='d-flex justify-content-center mb-3' type="password" name="password" value={user.password} placeholder="Ingrese Clave" onChange={cambiodatos}></input>
                
                <button type="button" className=" mt-2 me-5 rounded-pill  bg-secondary text-white" > Iniciar Session</button>
                
                <button type="button" className=" mb-5 rounded-pill bg-secondary text-white"> Registrarse</button>
                
              </form>
          </div>
            
        </Col>
      </Row>
    </Container>

    </>
  )
}

const CarrucelLogin = () => {
    return (
      <Carousel > 
        <Carousel.Item >
          <img
            className="d-block w-100 h-50"
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHJvcGElMjBkZSUyMG1vZGElMjBQUklNQVZFUkElMjBDT04lMjBDT0xPUnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50 carrusel-imagen"
            src="https://images.unsplash.com/photo-1523359346063-d879354c0ea5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fHJvcGElMjBkZSUyMG1vZGElMjBQUklNQVZFUkElMjBDT04lMjBDT0xPUnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100 h-50 carrusel-imagen"
            src="https://images.unsplash.com/photo-1593592023995-a857ecf39076?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE1fHxyb3BhJTIwZGUlMjBtb2RhJTIwUFJJTUFWRVJBJTIwQ09OJTIwQ09MT1J8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
  


export default Login 