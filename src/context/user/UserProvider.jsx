import UserContext from './UserContext'
import userReducer from './userReducer'
import { useReducer } from 'react'
import axiosClient from '../../config/axiosClient'
import { useNavigate } from "react-router-dom";

const UserProvider = ({children}) => {
  const msg = "valor  de use ccontext"
  const navigate = useNavigate()
  const [userState,dispatch] = useReducer(userReducer,{
    infoUser:[],
    authStatus:false
  })

  const LoginUser = async(user) => {
    try {
      const userlogin = await axiosClient.post("/users/signin",user)
      
      if (userlogin.data.success){
        dispatch({type: "REGISTER/LOGIN", payload: userlogin.data })
      }
     
    } catch (e) {
      console.log(e)
    }
  }

  const registerUser = async(user) => {
    try {
      const userlogin = await axiosClient.post("/users",user)
      console.log("userlogin " + userlogin.data.message)
      if (userlogin.data.success){
        dispatch({type: "REGISTER/LOGIN", payload: userlogin.data })
      }
     
    } catch (e) {
      console.log(e)
    }
  }
  
  const verificarTokent = async() => {
    console.log("INgresa a verificarTokent ")
    const miTocken= localStorage.getItem ("token")
    console.log("MI TOKENNNN " + miTocken)
    if(miTocken) {
      axiosClient.defaults.headers.common["Authorization"] = `Bearer ${miTocken}`
  } else {
      delete axiosClient.defaults.headers.common["Authorization"]
  }

    try{
      console.log("userlogin " )
        const userConect = await axiosClient.get("/users/verificarUsuario")
        console.log("userlogin " + userConect.data.info)
        if (userConect.data.success){
          dispatch({type: "INFO_USER", payload: userConect.data.info })
        }
        
    } catch (e) {
      console.log(e)
    }
  }

  const cerrarSession = () =>{
    try {
      dispatch({type: "LOGOUT"})
      navigate("/")
      console.log("cerrarSession " + userState)
  } catch (error) {
      console.log(error)
  }
  }

  return (
   
    <UserContext.Provider value={{msg,LoginUser,registerUser,verificarTokent,cerrarSession, infoUser: userState.infoUser,authStatus: userState.authStatus }}>{children}</UserContext.Provider>
  )
}

export default UserProvider