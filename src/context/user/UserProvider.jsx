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
  
  const editarUser = async(data) => {
    const miTocken= localStorage.getItem ("token")
    if(miTocken) {
      axiosClient.defaults.headers.common["Authorization"] = `Bearer ${miTocken}`
  } else {
      delete axiosClient.defaults.headers.common["Authorization"]
  }
    const updateUser = await axiosClient.put("/users/myprofile", data)
    if (updateUser.data.success){
      dispatch({type: "INFO_USER", payload: updateUser.data.info })
    }
    console.log(updateUser)
}

  const verificarTokent = async() => {
    const miTocken= localStorage.getItem ("token")
    if(miTocken) {
      axiosClient.defaults.headers.common["Authorization"] = `Bearer ${miTocken}`
  } else {
      delete axiosClient.defaults.headers.common["Authorization"]
  }

    try{
        const userConect = await axiosClient.get("/users/verificarUsuario")
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
   
    <UserContext.Provider value={{msg,LoginUser,registerUser,verificarTokent,cerrarSession,editarUser, infoUser: userState.infoUser,authStatus: userState.authStatus }}>{children}</UserContext.Provider>
  )
}

export default UserProvider