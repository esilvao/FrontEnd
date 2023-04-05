import UserContext from './UserContext'
import { useReducer } from 'react'
import axiosClient from '../../config/axiosClient'

const UserProvider = ({children}) => {
  const msg = "valor  de use ccontext"
  const [userstate,dispatcher] = useReducer(UserContext,{
    infoUser:[],
    authStatus:false
  })

  const LoginUser = async(user) => {
    try {
      const userlogin = await axiosClient.post('/users/signin',user)
      console.log("USER login"+userlogin.data )
      console.log("USER login"+userlogin.data.token )
      if (userlogin.data.success){
        dispatcher({type: "REGISTER/LOGIN", payload: userlogin.data })
      }
      console.log("USER login"+userlogin.data.message )
    } catch (error) {
      
    }
  }
  
  return (
   
    <UserContext.Provider value={{msg,LoginUser}}>{children}</UserContext.Provider>
  )
}

export default UserProvider