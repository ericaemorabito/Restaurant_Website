import React from "react";
import "../styles/infoCard.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import bruschetta from "../images/bruschetta.jpeg";

const InfoCard = () => {
  return (
    <>
      <Container fluid>
        <Row className="h-75 py-5 mx-5">
          <Col sm={12} m={6} lg={6} className="py-3 d-flex flex-column align-items-center justify-content-center">
            <div id="image-border-top" className="d-flex flex-column align-items-center justify-content-center">
              <img
                src={bruschetta}
                className="info-card-image"
                alt="tomato bruschetta on table"
              ></img>
            </div>
          </Col>
          <Col sm={12} m={6} lg={6} className="py-3 d-flex flex-column align-items-center justify-content-center">
            <div className="info-card py-5 px-5">
              <h2 className="py-2">Host a Party</h2>
              <p className="py-1">
                We recommend celebrating all moments, big or small, or turning a
                business dinner into a festive feast. At Colletta, you don't
                need an excuse to gather.
              </p>
              <Button variant="dark">Make a Reservation</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InfoCard;
