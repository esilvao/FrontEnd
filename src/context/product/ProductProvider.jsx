import axiosClient from "../../config/axiosClient";
import productReducers from "./ProductReducer";
import ProductContext from "./ProductContext";
import { useReducer } from "react";



const ProductProvider = ({ children }) => {

    const initialState = {
        products: [],
        product: [{
            _id: "",
            categoria: "",
            subCategoria: "",
            SKU:  "",
            producto: "",
            marca:  "",
            precio:  "",
            genero: "",
            talla: "",
            color:  "",
            material:  "",
            temporada: "",
            stock:  "",
            image: ""
          }]
    }

    const [productState, dispatch] = useReducer(productReducers, initialState)//*dispatch actualiza información del estado que cree

    const getProduct = async (id) => {
    const result = await axiosClient.get(`/product/${id}`)
    const product = result.data.info;

        dispatch({
            type: "GET_PRODUCT",
            payload: product
        })

        return product;
    }

    const getProducts = async () => {
        const result = await axiosClient.get("/product")

        dispatch({
            type: "GET_PRODUCTS",
            payload: result.data.info
        })
    }

    const reduceStock = async (cartItems) => {
        try {
            const productos = { cartItems }
            console.log(productos)
            const result = await axiosClient.put("/product/reduce", productos)
            console.log(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ProductContext.Provider value={{
            getProduct,
            getProducts,
            products: productState.products,
            product: productState.product,
            reduceStock
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider