
import IconCarrito from '../../../assets/carrito.svg'
import CartContext from '../../../context/cart/CartContext'
import { useContext } from 'react'
import './CartIcon.css'

const CartIcon = () => {
  const { cartcount, isCartOpen, setIsCarroAbierto } =  useContext(CartContext)

  const handleCartOpe  = () =>{
    setIsCarroAbierto(!isCartOpen)
  }
  return (
    <div onClick={handleCartOpe}>
     <img src={IconCarrito} className='shop-icon' alt="carrito"/>
    <span className="item-count">{cartcount}</span>
    </div>
  )
}

export default CartIcon;