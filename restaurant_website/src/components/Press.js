import React from "react";
import '../styles/press.css'
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const Press = () => {
  return (
    <>
      <Container className="w-75 mb-3" id="press-container">
        <h3 className="text-center pt-5">Featured Press</h3>
        <Row>
          <Col
            sm={12}
            m={6}
            lg={6}
            className="py-3 d-flex flex-column align-items-center"
          >
            <Button className="press-button py-3 px-3 my-2">Easter Carolinas</Button>
            <p className="subtitle py-3 px-3 my-2">Top 10 Hottest Restaurants</p>
          </Col>
          <Col
            sm={12}
            m={6}
            lg={6}
            className="py-3 d-flex flex-column align-items-center"
          >
            <Button className="press-button py-3 px-3 my-2">Easter Carolinas</Button>
            <p className="subtitle py-3 px-3 my-2">Top 10 Hottest Restaurants</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Press;
