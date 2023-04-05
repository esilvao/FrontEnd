
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';

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
          <Card >
            <Card.Header>Lo mas vendido</Card.Header>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TW9kYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="S" style={{ width: '200px', height: '250px' }} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>Lo mas vendido</Card.Header>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1571678432797-0fd4f9061c4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEyfHxNb2RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="S" style={{ width: '200px', height: '250px' }} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>Avance de Temporada</Card.Header>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1596902852858-126144389ee2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fE1vZGF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="S" style={{ width: '200px', height: '250px' }} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>Avance de Temporada</Card.Header>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1513094735237-8f2714d57c13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjAwfHxNb2RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="S" style={{ width: '200px', height: '250px' }} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
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
      <Carousel>
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
            src="https://images.unsplash.com/photo-1544413164-5f1b361f5b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
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