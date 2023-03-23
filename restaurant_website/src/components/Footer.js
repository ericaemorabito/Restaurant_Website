import React from "react";
import '../styles/footer.css'
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="my-3 d-flex justify-content-center align-items-center">
          <p>Contact</p>
          <p>Press</p>
          <p>Hours & Location</p>
          <p>Reservations</p>
    </footer>
  );
};

export default Footer;
