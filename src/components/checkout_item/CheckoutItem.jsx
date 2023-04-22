import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import { useContext } from 'react';
import CartContext from '../../context/cart/CartContext';

const CheckoutItem = ({ cartItem }) => {
  const { agregarALCarro, eliminarDelCarro } = useContext(CartContext)
  const {  image,  producto,  talla,  stock, precio, quantity } = cartItem




  const addHandler = () => { if(quantity < stock) agregarALCarro(cartItem)}
  const removeHandler = () => eliminarDelCarro(cartItem)

  return (

    <div>
      <MDBCard className="mb-3">
        <MDBCardBody>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <div>
                <MDBCardImage
                  src={image}
                  fluid className="rounded-3" style={{ width: "65px" }}
                  alt="Shopping item" />
              </div>
              <div className="ms-3">
                <MDBTypography tag="h5"> {producto}   </MDBTypography>
                <p className="small mb-0">Talla : {talla}</p>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <div style={{ width: "50px" }}>
                <MDBTypography tag="h5" className="fw-normal mb-0">
                  {quantity}
                </MDBTypography>
              </div>
              <div style={{ width: "80px" }}>
                <MDBTypography tag="h5" className="mb-0">
                  {precio}
                </MDBTypography>
              </div>
              <a href="#!" onClick={removeHandler} style={{ color: "#cecece" }}>
              <MDBIcon fas icon="angle-left" />
              </a>
              <a href="#!" onClick={addHandler} style={{ color: "#cecece" }}>
              <MDBIcon fas icon="angle-right" />
              </a>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </div>
  )
}

export default CheckoutItem