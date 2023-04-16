import { Link } from 'react-router-dom';
import { Card, Button  } from 'react-bootstrap';
import './CardProducts.css';
import React from 'react';


{/* desde productos paso las propiedades del producto*/}
const CardProducts = ({ product }) => {
  const { _id, image, marca, genero, stock, producto, precio } = product;

  return (
                <Link to={`/product/${_id}`} style={{ textDecoration: 'none' }}>
                    <Card className="CardProducts ms-3" >
                        <Card.Img variant="top" src={image} style={{ height: '200px' }}  />
                        <Card.Body style={{ marginBottom: '5px' }}>
                            <Card.Title  style={{ color: 'black' }}>{producto}</Card.Title>
                            <Card.Text>
                            <p style={{ color: 'black' }}>Marca: {marca}</p>
                            <p style={{ color: 'black' }}>Genero: {genero}</p>
                                <p className="text-sm font-medium text-gray-900" style={{ color: 'black' }}>${precio}</p>
                            </Card.Text>
                            <Button variant="success" disabled={stock === 0}>
                                {stock === 0 ? 'Sin Stock' : 'Comprar'}{/* usamos un operador ternario para una condición booleana: ejemplo condición ? expresión si es verdadera : expresión si es falsa*/}
                            </Button>
                        </Card.Body>
                    </Card>
                </Link>
              

          
);

};

export default CardProducts