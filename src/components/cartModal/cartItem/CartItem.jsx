

const CartItem = ({cartItem}) => {
  const { producto, precio, quantity, image} = cartItem
  return (
    <>
    <img src={image} alt={producto}/>
     <span>{producto}</span>
     <span>{cartItem.quantity}</span>
     <span>{precio} * { quantity }</span>
    </>
   
  )
}

export default CartItem