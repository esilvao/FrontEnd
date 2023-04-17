
import {
  MDBCardImage,
} from "mdb-react-ui-kit";

const CartItem = ({ cartItem }) => {
  const { producto, precio, quantity, image } = cartItem
  return (
    <>


      <div className="d-flex flex-row align-items-center">
        <div>
          <MDBCardImage
            src={image}
            fluid className="rounded-3" style={{ width: "65px" }}
            alt="Shopping item" />
        </div>
        <div className="ms-3">
          <p className="small mb-0"> {producto} ({quantity})</p>
          <p className="small mb-0">Precio : {precio}</p>
        </div>
      </div>



    </>

  )
}

export default CartItem