import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


  const LoMasVendido = () => {
    return (
      <div>
        <Row>
          <Col >
            <Card className="mt-5 mb-5 ">
              <Card.Header  style={{ textAlign: 'center', fontWeight: 'bold' }} >Lo Mas Vendido Nro.1 </Card.Header>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TW9kYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="S" style={{ width: '200px', height: '250px',  margin: 'auto'  }} />
              <Card.Body style={{ textAlign: 'center' }}>
                <Card.Title>Buzo Térmico</Card.Title>
                <Card.Text>
                Este buzo estaría confeccionado con un tejido de alta resistencia al agua y 
                podría tener una capa interior para proporcionar aislamiento térmico
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mt-5 mb-5 ">
              <Card.Header style={{ textAlign: 'center', fontWeight: 'bold' }}>Lo Mas Vendido Nro. 2</Card.Header>
              <Card.Img variant="top" src="https://media.istockphoto.com/id/1352080196/es/foto/retrato-de-un-empresario-maduro-y-amigable.jpg?s=2048x2048&w=is&k=20&c=kBRvkQa2QIwv5rAt8ra9dWd1qBMQ3hl2O0-xeGH3ev8=" alt="S" style={{ width: '200px', height: '250px',  margin: 'auto'  }} />
              <Card.Body style={{ textAlign: 'center' }}>
                <Card.Title>Traje de Hombre</Card.Title>
                <Card.Text>
                Este tipo de traje se utiliza en eventos formales o profesionales,
                como bodas, entrevistas de trabajo o reuniones de negocios
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mt-5 mb-5 ">
              <Card.Header style={{ textAlign: 'center', fontWeight: 'bold'}}>Avance de Temporada</Card.Header>
              <Card.Img variant="top" src="https://media.istockphoto.com/id/643268472/es/foto/hermosa-elegante-mujer.jpg?s=2048x2048&w=is&k=20&c=Gm3SVVC2lyt0GFC0RO-WjurDk2hn0yYNRcwEhcfm6Z4="alt="S" style={{ width: '200px', height: '250px',  margin: 'auto'  }} />
              <Card.Body style={{ textAlign: 'center' }}>
                <Card.Title>Abrigo Largo</Card.Title>
                <Card.Text>
                Abrigo de diseño clasico, elegante y versátil, se puede usar para muchas ocasiones, desde una salida 
                casual hasta un evento más formal
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mt-5 mb-5 ">
              <Card.Header style={{ textAlign: 'center', fontWeight: 'bold' }}>Avance de Temporada</Card.Header>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1513094735237-8f2714d57c13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjAwfHxNb2RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="S" style={{ width: '200px', height: '250px',  margin: 'auto'  }} />
              <Card.Body style={{ textAlign: 'center' }}>
                <Card.Title>Trench de Poliester</Card.Title>
                <Card.Text>
                El trench de poliéster es una prenda versátil que puede ser utilizada tanto en looks casuales como formales.
                Puede venir en diferentes largos
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }


export default LoMasVendido