import React from "react";
import "../styles/join.css";
import "../styles/infoCard.css";
import pasta from "../images/pasta.jpeg";
import { Container, Button } from "react-bootstrap";

const Join = ({makeReservation}) => {
  return (
    <>
      <Container fluid id="join" className="mt-5 w-100">
        <div className="color-overlay  d-flex flex-column align-items-center justify-content-center">
          <h3 className="my-2 text-light">Join Us for Dinner</h3>
          <Button className="my-3 black-button card-button" onClick={makeReservation} variant="dark">
            RESERVATIONS
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Join;
