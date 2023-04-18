import CartContext from "../../../context/cart/CartContext"
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import {Button} from "@mui/material";
import CartItem from "../cartItem/CartItem";
import './CartDropdown.css'

const CartDropdown = () => {
    const navigate = useNavigate()
    const {cartItems,setIsCarroAbierto} = useContext(CartContext)

    const goToCheckout = () => {
      setIsCarroAbierto(false)
      navigate("/checkout")
    }

    const goToHome = () => {
      setIsCarroAbierto(false)
      navigate("/listaproductos")
  }
  console.log(cartItems.length)

  return (
    <>
  
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.length>0 ? (cartItems.map((cartItem) => (
                    <CartItem key={cartItem._id} cartItem={cartItem}/> 
                ))
                ) : 
                    <span className="empty-message">Sin Productos en el carro</span>
                }
            </div>
            <Button onClick={goToCheckout}>Bolsa de Compras</Button> <Button onClick={goToHome}>Catalogo</Button> 
        </div>

    </>
  )
}

export default CartDropdown