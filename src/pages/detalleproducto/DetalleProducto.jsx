import React, { useContext, useEffect } from "react";
import ProductContext from "../../context/product/ProductContext";
import { useParams, Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';

const DetalleProducto = () => {
  const { id } = useParams(); //* este hook obtiene el id 

  const { getProduct, product } = useContext(ProductContext);
  const { image, categoria, subCategoria, producto, marca, genero, talla, color, material,
    temporada, stock, precio } = product[0];

  useEffect(() => {
    const fetchProduct = async () => {
      await getProduct(id);
    };

    fetchProduct();
  }, []);




  return (
    <div className="prueba">
      {product.length === 0 ? null : (
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
      )}
    </div>
  );
}
  export default DetalleProducto;
