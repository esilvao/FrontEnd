import { useContext } from "react"
import UserContext from "../../context/user/UserContext"

const PerfilUsuario = () => {
  const {infoUser} = useContext(UserContext)
  

   const { nombre , isAdmin, apellido,age,telefono,email} = infoUser

  return (
    <>
      <div>
          {isAdmin ?  <p> Usuario Administrador</p> : <p>Usuario Cliente</p>}
      </div>
        <div><label>Nombre : </label> <input type="text" name="nombre" value={nombre} readonly></input> </div>
        <div><label>Email : </label> <input type="text" name="email" value={email}></input> </div>
        <div><label>Apellido: </label>  <input type="text" name="apellido" value={apellido}></input> </div>
        <div><label>Edad: </label> <input type="text" name="age" value={age}></input> </div>
        <div><label>Telefono : </label><input type="text" name="telefono" value={telefono}></input> </div>
    </>
  )
}

export default PerfilUsuario