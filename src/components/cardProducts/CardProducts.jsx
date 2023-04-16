import { Link } from 'react-router-dom';
import { Card, Button, Col, Container, Row } from 'react-bootstrap';
import './CardProducts.css';
import React from 'react';



const CardProducts = ({ product }) => {
  const { _id, image, marca, genero, stock, producto, precio } = product;

  return (

        
                <Link to={`/detalleproducto/${_id}`} style={{ textDecoration: 'none' }}>
                    <Card className="CardProducts ms-3" >
                        <Card.Img variant="top" src={image} />
                        <Card.Body style={{ marginBottom: '5px' }}>
                            <Card.Title>{producto}</Card.Title>
                            <Card.Text>
                                <p>Marca: {marca}</p>
                                <p>Genero: {genero}</p>
                                <p className="text-sm font-medium text-gray-900">${precio}</p>
                            </Card.Text>
                            <Button variant="primary" disabled={stock === 0}>
                                {stock === 0 ? 'Sin Stock' : 'Comprar'}
                            </Button>
                        </Card.Body>
                    </Card>
                </Link>
              

          
);

};

export default CardProducts