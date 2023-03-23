import React from "react";
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/blurb.css";

const Blurb = ({ about, text }) => {

  const navigate = useNavigate();

  const handleToAbout = () => {
    navigate('/about')
  }

  const handleToMenu = () => {
    navigate('/menu')
  }

  return (
    <Container fluid id="home-about-blurb">
      <Row className="d-flex flex-column align-items-center justify-content-center my-5">
        <Col
          sm={10}
          m={8}
          lg={9}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <div id="blurb-text" className="my-2 mx-5 styled-text">
            {text}
          </div>
          {about ? (
            <Button id="learn-more-button" className="my-3" onClick={handleToMenu}>
          SEE MENU
        </Button>
          ) :
          <Button id="learn-more-button" className="my-3" onClick={handleToAbout}>
          LEARN MORE
        </Button>
          }
            
        </Col>
      </Row>
    </Container>
  );
};

export default Blurb;
