import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useContext,useEffect } from 'react';
import ProductContext from '../../context/product/ProductContext';

const DetalleProducto = () => {
  const { id } = useParams()
  const { getProduct,product } = useContext(ProductContext)
  useEffect(() => {
    const fetchProduct = async () => {
      await getProduct(id);
    };
    fetchProduct();
  }, []);
  const {  image, categoria, subCategoria, producto, marca, genero, talla, color, material, temporada, stock, precio } = product[0];
  return (

    <div className="container my-5">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <Card>
        <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{producto}</Card.Title>
            <Card.Text>
              <p>Categoría: {categoria}</p>
              <p>Subcategoría: {subCategoria}</p>
              <p>Marca: {marca}</p>
              <p>Genero: {genero}</p>
              <p>Talla: {talla}</p>
              <p>Color: {color}</p>
              <p>Material: {material}</p>
              <p>Temporada: {temporada}</p>
              <p>Stock: {stock}</p>
              <p className="text-sm font-medium text-gray-900">${precio}</p>
            </Card.Text>
            <Button variant="primary" disabled={stock === 0}>
              {stock === 0 ? 'Sin Stock' : 'Comprar'}
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  </div>
  )
}

export default DetalleProducto