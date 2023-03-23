import { Carousel, Container } from "react-bootstrap";
import "../styles/carousel.css";
import pasta from "../images/pasta.jpeg";
import bruschetta from "../images/bruschetta.jpeg";
import olivePasta from "../images/olivepasta.jpeg";
import beefPasta from "../images/beefpasta.jpeg";
import cheese from "../images/cheese.jpeg";
import dough from "../images/dough.jpeg";
import pizza from "../images/pizza.jpeg";
import dryPasta from "../images/drypasta.jpeg";
import makingPasta from "../images/makingpasta.jpeg";

function ImageCarousel({ home }) {
  return (
    <Container className="my-5">
      <Carousel as="div" id="carousel-container" fade>
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
            src={beefPasta}
            // src={dough}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default ImageCarousel;
