import { Carousel, Container } from "react-bootstrap";
import "../styles/carousel.css";
import redPasta from "../images/redpasta.jpeg";
import bruschetta from "../images/bruschetta.jpeg";
import olivePasta from "../images/olivepasta.jpeg";
import pizza from "../images/pizza.jpeg";
import dough from "../images/dough.jpeg";
import dryPasta from "../images/drypasta.jpeg";
import makingPasta from "../images/makingpasta.jpeg";

function ImageCarousel({ home }) {
  return home ? (
    <Container className="my-5">
      <Carousel as="div" id="carousel-container" fade>
        {home ? (
          <h1 className="page-title">Welcome</h1>
        ) : (
          <h1 className="page-title">About</h1>
        )}

        {/* <Carousel.Item> */}
        <Carousel.Item interval={3000}>
          <img
            className="carousel-image d-block"
            src={olivePasta}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="carousel-image d-block w-100"
            src={pizza}
            // src={dryPasta}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="carousel-image d-block w-100"
            src={redPasta}
            // src={dough}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  ) : (
    <Container className="my-5">
      <Carousel as="div" id="carousel-container" fade>
        {/* <Carousel.Item> */}
        <Carousel.Item interval={3000}>
          <img
            className="carousel-image d-block"
            src={dough}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="carousel-image d-block w-100"
            src={dryPasta}
            // src={dryPasta}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="carousel-image d-block w-100"
            src={makingPasta}
            // src={dough}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default ImageCarousel;
