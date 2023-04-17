const cartReducer = (state, action) => {
  const {type, payload} = action;

  switch (type){
      case "ADD_TO_CARDS":
          return {
            ...state,
            ...payload
          }
    case "SET_IS_CARDS_OPEN":
              return {
                ...state, isCartOpen: payload
              }
      case "CLEAR_TO_CHECKOUT":
            return {
              cartItems:[],
              cartTotal:0,
              cartcount:0,
              isCardOpen:false
            }
      default:
            return state;
  }
}

export default cartReducer;