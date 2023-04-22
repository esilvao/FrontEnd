import Carousel from 'react-bootstrap/Carousel';

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
          <p className=" mb-2 bg-success bg-gradient text-white rounded-5"> Las tendencias y todo lo que buscas lo tenemos para ti.</p>
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
          <p className=" mb-2 bg-success bg-gradient text-white rounded-5"> Lo que esta de moda y lo que más te gusta lo enncuentras aquí.</p>
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

export default CarrucelHome