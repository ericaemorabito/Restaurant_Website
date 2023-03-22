import { Carousel, Container } from "react-bootstrap";
import "../styles/carousel.css";
import pasta from "../images/pasta.jpeg";
import bruschetta from "../images/bruschetta.jpeg";

function ImageCarousel() {
  return (
    <Container  className="my-5">
      <Carousel id="carousel-container" fade>
        <Carousel.Item interval={3000}>
          <img
            className="carousel-image d-block w-100"
            src={pasta}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="carousel-image d-block w-100"
            src={pasta}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="carousel-image d-block w-100"
            src={bruschetta}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default ImageCarousel;
