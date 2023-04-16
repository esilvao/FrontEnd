import axiosClient from "../../config/axiosClient";
import productReducers from "./ProductReducer";
import ProductContext from "./ProductContext";
import { useReducer } from "react";//* es un hook


{/* almaceno mis productos desde la base de datos*/}
const ProductProvider = ({ children }) => {

    const initialState = {
        products: [],
        product: [{
            _id: "",
            categoria: "",
            subCategoria: "",
            SKU: "",
            producto: "",
            marca: "",
            precio: "",
            genero: "",
            talla: "",
            color: "",
            material: "",
            temporada: "",
            dateUpdate: "",
            stock: "",
            bodega: "",
            images:""


        }]
    }

    const [productState, dispatch] = useReducer(productReducers, initialState)//*dispatch actualiza información del estado que cree

    const getProduct = async (id) => {
    const result = await axiosClient.get(`product/${id}`)//obtiene los datos del backend del productRouter
    const product = result.data.info;

        dispatch({
            type: "GET_PRODUCT",
            payload: product
        })

        return product;
    }
{/* a traves del axios consumo datos del backend*/}
    const getProducts = async () => {
        const result = await axiosClient.get("/product")//* capturamos la data de la información, axios guarda la información en data.
{/* la información de los productos se cargan en data e Info que trae la información desde desde el controlador de productos del backend */}
        dispatch({
            type: "GET_PRODUCTS",
            payload: result.data.info
        })
    }


    {/* el ProductState es el valor inicial, cuando se ejecuta el dispatch se llena de datos con la información de base de datos*/}
    return (
        <ProductContext.Provider value={{getProduct, getProducts,
            products: productState.products,
            product: productState.product,
           //*reduceStock
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider