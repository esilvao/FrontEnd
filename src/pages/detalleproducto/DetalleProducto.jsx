import React, { useContext, useEffect } from "react";
import ProductContext from "../../context/product/ProductContext";
import CartContext from '../../context/cart/CartContext';
import { useParams } from "react-router-dom";
import { Button, Container, Row, Col, Figure } from 'react-bootstrap';

const DetalleProducto = () => {

  const { getProduct,product } = useContext(ProductContext)
  const { agregarALCarro, cartCount } = useContext(CartContext)
  const handleAdd = () => { agregarALCarro(product[0])}
  const { id } = useParams(); //* este hook obtiene el id 

 

  useEffect(() => {
    const fetchProduct = async () => {
      await getProduct(id);
    };

    fetchProduct();
  }, []);

  if (product.length === 0) {
    return null;
  }

  const { image, categoria, subCategoria, marca, talla, color, material,
    temporada, stock, precio } = product[0];


  return (
    <div className="prueba">
      {product.length === 0 ? null : (
        <Container>
          <Row>
            <Col>
              <Figure className="mt-5 mb-5 ">
                <Figure.Image src={image} style={{ display: 'inline-block' }}></Figure.Image>
              </Figure>
            </Col>
            <Col className="mt-4 mb-4">
              <h3>Categoría: {categoria}</h3>
              <p className="my-2">Subcategoría: {subCategoria}</p>
              <p className="my-2">Marca: {marca}</p>         
              <p className="my-2">Talla:  {talla}</p>    
              <p className="my-2">Color: {color}</p>
              <p className="my-2">Material: {material}</p>
              <p className="my-2">Temporada: {temporada}</p>
              <p className="my-2">Stock: {stock}</p>
              <p className="text-sm font-medium text-gray-900">${precio}</p>
              <Button onClick={handleAdd} variant="success" disabled={stock === 0}>
                {stock === 0 ? 'Sin Stock' : 'Añadir al carro'}
              </Button>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}
export default DetalleProducto;
