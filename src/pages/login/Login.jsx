import {Row,Col,Container, Button} from 'react-bootstrap'
import logoEmpresa from "../../assets/LogoEmpresa.jpg";
import '../../pages/login/Login.css'
import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import { useContext } from 'react';
import UserContext from '../../context/user/UserContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const [registrarse , setRegistrarse] = useState(false)
  const {LoginUser,registerUser,authStatus} = useContext(UserContext)
  const navegar = useNavigate()

  const userValorInicial = {
    email: "",
    password: "",
    nombre: "",
    apellido:"",
    telefono:"",
    imagen:""
  }
  const  [user,setUser] = useState(userValorInicial)

  const changeMode = () =>{
    setRegistrarse(!registrarse)
    setUser(userValorInicial)
  }


  const handleChange = (e) => {
    e.preventDefault();
   setUser((previo) => ({
    ...previo,
    [e.target.name]: e.target.value
   }))
  }

  const irHome = () => {
    navegar('/')
  }

  const handlerSubmit = async(e) => {
    e.preventDefault()
    try{
      if(registrarse){
        registerUser(user)
      }else{
        LoginUser(user)
     }
     setUser(userValorInicial)
     navegar('/')
    }
    catch(error){
      console.log(error)
    }
    
  }
  
  console.log(user.email)
 // const iamgen2="https://images.unsplash.com/photo-1610100926890-26d130f677a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIzfHxyb3BhJTIwZGUlMjBtb2RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
  return (
    <>
    
    
    <Container>
      <Row>
        <Col > <CarrucelLogin /></Col>
        <Col  className="mt-5 mb-5 ">
        <div class=" d-flex justify-content-center">
          <img  src={logoEmpresa} height='200' alt='Mareli' /> 
        </div>
     
        <div class="p-3 mb-2  bg-secondary text-white  d-flex justify-content-center">Ingresar con tu cuenta para acceder a descuentos y promociones</div>
        
              
            <form onSubmit={handlerSubmit}>
              <input className='d-flex justify-content-center mb-3 mt-3 w-75' type="text" name="email" value={user.email} placeholder="ejemplo@gmail.com" onChange={handleChange}></input>
                
              <input className='d-flex justify-content-center mb-3  w-75' type="text" name="password" value={user.password} placeholder="Ingrese Clave" onChange={handleChange}></input>
                
                      {registrarse && ( <input className='d-flex justify-content-center mb-3  w-75' type="text" name="nombre" value={user.nombre} placeholder="Ingrese Nombre" onChange={handleChange}></input>)}

                      {registrarse && ( <input className='d-flex justify-content-center mb-3  w-75' type="text" name="apellido" value={user.apellido} placeholder="Ingrese Apellido" onChange={handleChange}></input>)}

                      {registrarse && ( <input className='d-flex justify-content-center mb-3  w-75' type="text" name="telefono" value={user.telefono} placeholder="Ingrese Numero de Telefono" onChange={handleChange}></input>)}

                      {registrarse && ( <input className='d-flex justify-content-center mb-3  w-75' type="text" name="imagen" value={user.imagen} placeholder="Ingrese imagen" onChange={handleChange}></input>)}


                      <Button type="submit" className=" mt-2 me-5 rounded-pill text-white w-25" size="sm" > Iniciar Session</Button>
                
                      {registrarse ? <Button className=" mt-2 me-5 rounded-pill text-white w-25"  size="sm" onClick={irHome}>Salir</Button> : <Button type="button" className=" mt-2 me-5 rounded-pill text-white  w-25" size="sm" onClick={changeMode}> Registrarse</Button>}
              
              </form>
       
            
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
            className="d-block imagen-carrucel "
            height="600" 
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHJvcGElMjBkZSUyMG1vZGElMjBQUklNQVZFUkElMjBDT04lMjBDT0xPUnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  imagen-carrucel"
            height="600" 
            src="https://images.unsplash.com/photo-1523359346063-d879354c0ea5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fHJvcGElMjBkZSUyMG1vZGElMjBQUklNQVZFUkElMjBDT04lMjBDT0xPUnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block  imagen-carrucel"
            height="600" 
            src="https://images.unsplash.com/photo-1593592023995-a857ecf39076?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE1fHxyb3BhJTIwZGUlMjBtb2RhJTIwUFJJTUFWRVJBJTIwQ09OJTIwQ09MT1J8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      
    );
  }
  


export default Login 