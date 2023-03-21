import React from "react";
import '../styles/footer.css'
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container className="footer my-3">
        <Row className="d-flex align-items-center justify-content-center">
          <p className="text-center">Contact</p>
          <p className="text-center">Hours & Location</p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
