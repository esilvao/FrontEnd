import {
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import CheckoutItem from "../../components/checkout_item/CheckoutItem";


const Checkout = () => {

  const { cartItems, cartTotal, cartcount } = useContext(CartContext)

  return (
    <div className="mt-5 ms-5 me-5 mb-5">
      <h5>Total de productos  en el carro {cartcount}</h5>
      <div>


        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div className="ms-3">
              <MDBTypography tag="h8"> Producto </MDBTypography>
              <p className="small mb-0"></p>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center">
            <div style={{ width: "100px" }}>
              <MDBTypography tag="h8" className="fw-normal mb-0">
                Cantidad
              </MDBTypography>
            </div>
            <div style={{ width: "120px" }}>
              <MDBTypography tag="h8" className="mb-0">
                Precio
              </MDBTypography>
            </div>
          </div>

        </div>

      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem._id} cartItem={cartItem} />
      ))}
      <h5>Precio Total :  {cartTotal}</h5>
    </div>
  );
}
export default Checkout;