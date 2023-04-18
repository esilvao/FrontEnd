import { useReducer } from 'react'
import  cartReducer  from './cartReducer'
import  CartContext from './CartContext'
import { agregarProductoAlCarro,eliminarProductoDelCarro ,limpiarCarro} from './cartFuntion'



const CartProvider = ({children}) => {
const inicialState = {
  cartItems:[],
  cartTotal:0,
  cartcount:0,
  isCardOpen:false
}
const [{isCartOpen, cartItems, cartTotal, cartcount}, dispatch] = useReducer(cartReducer, inicialState)

// actualiza los productos que estan en el carrito de compras
const actualizaProductoDelCarro = (AddNuevoProducto) => {
const nuevoCantidadProducto = AddNuevoProducto.reduce((total, cartItem) => total + cartItem.quantity, 0)
const nuevototal = AddNuevoProducto.reduce((total, cartItem) => total + cartItem.quantity * cartItem.precio, 0)
console.log (nuevototal)
console.log (nuevoCantidadProducto)
dispatch({
  type: "ADD_TO_CARDS",
  payload: {
    cartItems:AddNuevoProducto,
    cartTotal:nuevototal,
    cartcount:nuevoCantidadProducto
  } 
})
}

const agregarALCarro = (productoAAgregar) => {
 
  const valoresCarroActualizado = agregarProductoAlCarro(cartItems,productoAAgregar)
  actualizaProductoDelCarro(valoresCarroActualizado)

}

const eliminarDelCarro = (productoAELiminar) => {
  console.log ("productoAELiminar cartItems: " + productoAELiminar.producto)
  const valoresCarroActualizado = eliminarProductoDelCarro(cartItems,productoAELiminar)
  actualizaProductoDelCarro(valoresCarroActualizado)
}

const limpiarCarroModal = (LimpiarProdductos) => {
  const valoresCarroActualizado = limpiarCarro(LimpiarProdductos)
  actualizaProductoDelCarro(valoresCarroActualizado)
}

const limpiarCheckout = () => {
  dispatch({
      type : "CLEAR_TO_CHECKOUT"
        
  })
}


//resive el valor booleando para saber si el carro esta abiero o cerrado
const setIsCarroAbierto = (carroAbierto) => {
  dispatch({
    type: "SET_IS_CARDS_OPEN",
    payload: carroAbierto
      
})
}

  return (
    <CartContext.Provider value={{isCartOpen, cartItems, cartTotal, cartcount,agregarALCarro,eliminarDelCarro,limpiarCarroModal,limpiarCheckout,setIsCarroAbierto}}>{children}</CartContext.Provider>
  )
}

export default CartProvider