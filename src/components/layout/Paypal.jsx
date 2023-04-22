import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import CartContext from "../../context/cart/CartContext";
import { useContext } from "react";




export default function Paypal() {

    const {cartTotal, limpiarCheckout} = useContext(CartContext)


    return (

        <PayPalScriptProvider options={{ "client-id": "AXP05c_KkowKAoTIFoZhMtfQu0SOyLFW5D3iloTF1WRCeaQ5egB0IIj8RlxP-PHO5xqCJSF-7NBjGBtU" }}>
            <PayPalButtons 
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: cartTotal,
                                    currency: "USD"
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Compra realizada exitosamente ${name}`);
                        console.log(data)
                        limpiarCheckout()
                    });
                }}
               
            />
        </PayPalScriptProvider>
    );
}