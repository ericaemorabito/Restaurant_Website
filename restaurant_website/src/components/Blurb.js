import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/blurb.css";

const Blurb = ({ text }) => {
  return (
    <Container fluid id="home-about-blurb">
      <Row className="d-flex flex-column align-items-center justify-content-center my-5">
        <Col
          sm={10}
          m={8}
          lg={9}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <div id="blurb-text" className="my-2">
            {text}
          </div>
            <Button id="learn-more-button" variant="light" className="my-3">
              Learn More
            </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Blurb;
