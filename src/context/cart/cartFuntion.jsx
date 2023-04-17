export const agregarProductoAlCarro = (cartItems,productAddCard) =>{
  const tieneProductoElCarro = cartItems.find((cardItem) => cardItem._id ===  productAddCard._id )
  console.log("tieneProductos : "+ tieneProductoElCarro)
  console.log("cartItems : " + cartItems)
  if(tieneProductoElCarro){
    cartItems.map((cartItem) => cartItem._id === productAddCard._id)
  }
  
  if(tieneProductoElCarro){
      return cartItems.map((cartItem) => 
              cartItem._id === productAddCard._id ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
  }
  // retorna un nuveo array con cartItems modificados
  return [...cartItems, { ...productAddCard, quantity: 1 }]
}

export const eliminarProductoDelCarro = (cartItems,eliminarProdudctoCarro) =>{
  const tieneProductos = cartItems.find((cartItem) => cartItem._id ===  eliminarProdudctoCarro._id )
  console.log("tieneProductos : "+ tieneProductos)
  console.log("cartItems : " + cartItems)
  if(tieneProductos){
    cartItems.map((cartItem) => cartItem._id === eliminarProdudctoCarro._id)
  }
  
  if(tieneProductos.quantity === 1){
    return cartItems.filter((cardItem) => cardItem._id !==  eliminarProdudctoCarro._id )

  }
  // retorna un nuveo array con cartItems modificados
  return cartItems.map((cartItem) => 
  cartItem._id === eliminarProdudctoCarro._id ? { ...cartItem, quantity: cartItem.quantity - 1 }
  : cartItem
)
}

export const limpiarCarro = (cartItems,limpiarProductoCarro) => {
  return cartItems.map((cartItem) => cartItem._id  !==  limpiarProductoCarro._id )
}
