import { useContext, useEffect } from "react";
import CardProducts from '../../components/cardProducts/CardProducts';
import ProductContext from '../../context/product/ProductContext';
import { Row, Col, Container } from "react-bootstrap";
import "./Products.css"



const Products = () => {

  const { products, getProducts } = useContext(ProductContext); //* este get products lo obtengo desde product provider
  {/*para que no se realice un loop infinito debo usar useEffect para que getProduct se ejecutes solo una vez para eso creo una función flecha*/ }
  useEffect(() => {//*no se puede poner async como parametro en useEffects
    const fecthProducts = async () => { //* el fectch captura los datos desde la bbdd
      await getProducts(); //primero se ejecuta el obtener productos
    }
    fecthProducts()// aca se llena los datos despues de ejecutarse la función getProducts
  }, [getProducts])
  {/*console.log(products)*/ }

  return (
    <Container className="titulo">
              <h1>Nuestros Productos</h1>
      
    <Container className="mt-5 mb-5" >{/* margen inferior y superior*/}
              <Row xs={1} md={2} className="g-4">
        {/* con este array recorro todo el array de producto del provider - por cada iteración se creara una tarjeta o card*/ }
              {products.map((product) => (

                <Col className="" md={3}>
                  <CardProducts className="m-auto" key={product._id} product={product} />{/* product={product}  es una props de card products*/ }
                </Col>

              ))}

            </Row>
          </Container>
          </Container>
    
  )
}

export default Products;