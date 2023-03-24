import React from "react";
import '../styles/footer.css'
import { Container, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Footer = ({handleHours, makeReservation}) => {
  return (
    <footer className="mb-3 mt-2 d-flex justify-content-center align-items-center">
          <p>CONTACT</p>
          <Button className="footer-btn" onClick={handleHours}>HOURS & LOCATION</Button>
          <Button className="footer-btn" onClick={makeReservation}>RESERVATIONS</Button>
    </footer>
  );
};

export default Footer;
