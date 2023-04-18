
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'


const Home = () => {
  return (
    <>
      <div className="p-2 mb-2 mt-2 bg-dark bg-gradient text-white rounded-5 d-flex justify-content-center">Despachos gratis en Santiago por compras sobre 50.000 </div>
      <CarrucelHome />
      <LoMasVendido />

    </>
  )
}
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


const ContenedorPublicidad = () => (
  <div className="publicidad">
    <h1>Contenedor de publicidad</h1>
  </div>
);



const CarrucelHome = () => {
  return (
    <>
      <Carousel className= "carrusel"> 
        <Carousel.Item>
          <img
            className="d-linea"
            src="https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjEwfHxNb2RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="First slide"
            style={{ width: '400px', height: '400px' }}
          />
          <img
            className="d-linea"
            src="https://images.unsplash.com/photo-1550614000-4895a10e1bfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fE1vZGF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            alt="Second slide"
            style={{ width: '400px', height: '400px' }}
          />
          <img
            className="d-linea"
            src="https://images.unsplash.com/photo-1601762603339-fd61e28b698a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fE1vZGF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            alt="Third slide"
            style={{ width: '400px', height: '400px' }}
          />
          <Carousel.Caption>
            <h3>Moda Mujer</h3>
            <p className=" mb-2 bg-success bg-gradient text-white rounded-5"> Las tendencias y todo lo que buscas lo tenemos para tí</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-linea"
            src="https://plus.unsplash.com/premium_photo-1675129933526-5eb24a763248?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU1fHxtb2RhJTIwZGUlMjBob21icmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            alt="First slide"
            style={{ width: '400px', height: '400px' }}
          />
          <img
            className="d-linea"
            src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjczfHxtb2RhJTIwZGUlMjBob21icmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            alt="Second slide"
            style={{ width: '400px', height: '400px' }}
          />
          <img
            className="Carousel"
            src="https://images.unsplash.com/photo-1515938736719-95b568dc8dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHJvcGElMjBkZSUyMGhvbWJyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt="Third slide"
            style={{ width: '400px', height: '400px' }}
          />

          <Carousel.Caption >
            <h3 >Moda Hombre</h3>
            <p className=" mb-2 bg-success bg-gradient text-white rounded-5"> Lo que esta de moda y todo lo que más te gusta lo enncuentras aquí.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="Carousel"
            src="https://images.unsplash.com/photo-1544413164-5f1b361f5b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"

            alt="Third slide"
            style={{ width: '400px', height: '400px' }}
          />
          <img

            className="Carousel"
            src="https://images.unsplash.com/photo-1622288664652-96211d818e8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"

            alt="Third slide"
            style={{ width: '400px', height: '400px' }}
          />

          <img
            className="Carousel"
            src="https://plus.unsplash.com/premium_photo-1661694212908-651b8c29fb1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"

            alt="Third slide"
            style={{ width: '400px', height: '400px' }}
          />

          <Carousel.Caption>
            <h3>Moda Infantil</h3>
            <p className=" mb-2 bg-success bg-gradient text-white rounded-5"> Ropa y accesorios diseñados específicamente para niños y niñas de diferentes edades.</p>
          </Carousel.Caption>

        </Carousel.Item>
      </Carousel>
    </>
  )

}
export default Home