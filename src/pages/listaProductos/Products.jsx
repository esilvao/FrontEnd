import { useContext, useEffect, useState } from "react";
import CardProducts from '../../components/cardProducts/CardProducts';
import ProductContext from '../../context/product/ProductContext';
import { Row, Col, Container } from "react-bootstrap";
import "./Products.css"



const Products = () => {

  const { products, getProducts } = useContext(ProductContext); //* este get products lo obtengo desde product provider {/*para que no se realice un loop infinito debo usar useEffect para que getProduct se ejecutes solo una vez para eso creo una función flecha*/ }
  const [loading, setLoading] = useState(true);


//*no se puede poner async como parametro en useEffects
//* el fectch captura los datos desde la bbdd
//primero se ejecuta el obtener productos
// aca se llena los datos despues de ejecutarse la función getProducts
  useEffect(() => {
      const fecthProducts = async () => { 
        await getProducts(); 
        setLoading(false);
      };
    fecthProducts();
  }, []);  
/*console.log(products)*/ 
  return (
    <Container className="titulo">
      <h1>Nuestros Productos</h1>
  
      <Container className="mt-5 mb-5">
        {loading ? ( // Muestra el spinner mientras se cargan los productos
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <Row xs={1} md={2} className="g-4">
            {products.map((product) => (
              <Col className="" md={3}>
                <CardProducts
                  className="m-auto"
                  key={product._id}
                  product={product}
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </Container>
  );
  };

export default Products;