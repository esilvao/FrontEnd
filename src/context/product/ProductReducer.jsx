const productReducers = (state, action) => {
    const {type, payload} = action;

    switch (type) {

        case "GET_PRODUCTS"://Función donde si hay casos si se cumple retorna el producto. 
            return {
                ...state,
                products: payload,
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

        case "GET_PRODUCT":
            return {
                ...state,
                product: [payload]
            }
        default:
            return state;
    }
}

export default productReducers