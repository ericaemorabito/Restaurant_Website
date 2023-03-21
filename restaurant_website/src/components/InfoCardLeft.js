import React from "react";
import "../styles/infoCard.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import pasta from "../images/pasta.jpeg";

const InfoCardLeft = () => {
  return (
    <>
      <Container fluid>
        <Row className="h-75 py-5 mx-5">
        <Col sm={12} m={6} lg={6} className="py-3 d-flex flex-column align-items-center justify-content-center">
            <div className="info-card py-5 px-5">
              <h2 className="py-2">Our Menu</h2>
              <p className="py-1">
              Come see the items featured from our scratch made kitchen.
              </p>
              <Button variant="dark">Menu</Button>
            </div>
          </Col>
          <Col sm={12} m={6} lg={6} className="py-3 d-flex flex-column align-items-center justify-content-center">
            <div id="image-border-bottom" className="d-flex flex-column align-items-center justify-content-center">
              <img
                src={pasta}
                className="info-card-image"
                alt="tomato bruschetta on table"
              ></img>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default InfoCardLeft