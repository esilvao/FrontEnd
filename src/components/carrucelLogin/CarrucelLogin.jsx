import Carousel from 'react-bootstrap/Carousel';


const CarrucelLogin = () => {
  return (

    <Carousel >
      <Carousel.Item >
        <img
          className="d-block imagen-carrucel "
          height="600"
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHJvcGElMjBkZSUyMG1vZGElMjBQUklNQVZFUkElMjBDT04lMjBDT0xPUnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  imagen-carrucel"
          height="600"
          src="https://images.unsplash.com/photo-1523359346063-d879354c0ea5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fHJvcGElMjBkZSUyMG1vZGElMjBQUklNQVZFUkElMjBDT04lMjBDT0xPUnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block  imagen-carrucel"
          height="600"
          src="https://images.unsplash.com/photo-1593592023995-a857ecf39076?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE1fHxyb3BhJTIwZGUlMjBtb2RhJTIwUFJJTUFWRVJBJTIwQ09OJTIwQ09MT1J8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

  );
}


export default CarrucelLogin