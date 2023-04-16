import { useContext, useEffect } from "react";
import CardProducts from  '../../components/cardProducts/CardProducts';
import ProductContext from '../../context/product/ProductContext';
import { Row, Col, Container } from "react-bootstrap";
import "./Products.css"
  


const Products = () => {

  const { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    const fecthProducts = async() => {
      await getProducts();
    }
    fecthProducts()
  }, [getProducts])
     console.log(products)

  return (
    <div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8  " >
          <div className="container-titulo">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Nuestros Productos
          </h2>
          </div>
         {/*<div className="mt-6 grid grid-cols-4 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">*/} 
        <Container className="mt-5 mb-5" >
         <Row xs={1} md={2} className="g-4">
          
          {products.map((product) => (
          
            <Col className="" md={3}>
            <CardProducts className="m-auto" key={product.id} product={product} />
            </Col>
           
          
          ))}
          
        </Row>
        </Container>
          {/*</div>*/} 
        </div>
      </div>
    </div>
  )
}

export default Products;