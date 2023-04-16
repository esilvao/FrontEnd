const productReducers = (state, action) => {
    const {type, payload} = action;

    switch (type) {

        case "GET_PRODUCTS"://Función donde si hay casos si se cumple retorna el producto. Con paylod cargo los productos en el provider
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
        {/* La información en el detalle del producto se cargara con paylod, este dato viene desde product*/}
        case "GET_PRODUCT":
            return {
                ...state,
                product: [payload]
            }
            {/* si hay un error de por medio retornara el estado iniacial, es decir un array vacío*/}
        default:
            return state;
    }
}

export default productReducers