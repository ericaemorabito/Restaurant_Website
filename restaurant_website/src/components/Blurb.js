import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/blurb.css";

const Blurb = () => {
  return (
    <Container fluid id="home-about-blurb">
      <Row className="d-flex flex-column align-items-center justify-content-center my-5">
        <Col sm={10} m={8} lg={9} className="d-flex flex-column align-items-center justify-content-center">
          <div id="blurb-text" className="my-2">
            Colletta, which means “collection” in Italian, is just that – a
            compilation of lively dining experiences. Colletta celebrates the
            best of Italian American dishes with welcoming hospitality and
            service. Seasonal changes guide the menu of scratch-made pasta made
            in-house daily, cheeses, antipastis, pizzas and more. Staying true
            to Italian dining traditions, Colletta also offers a “For the Table”
            dining option curated for a family-style experience, offered nightly
            alongside the full à la carte menu.
          </div>
          <Button id="learn-more-button" variant="light" className="my-3">Learn More</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Blurb;
