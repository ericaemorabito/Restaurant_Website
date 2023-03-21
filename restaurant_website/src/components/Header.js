import React from "react";
import "bootstrap";
import brand from "../images/brand.png";
import { Nav, Navbar, Container } from "react-bootstrap";
import '../styles/header.css';

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={brand}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav id='nav' as='div' className="justify-contents-end">
              <Nav.Link className="nav-links text-dark" href="/hours">Hours & Location</Nav.Link>
              <Nav.Link className="nav-links text-dark" href="/menu">Menu</Nav.Link>
              <Nav.Link className="nav-links text-dark" href="/about">About</Nav.Link>
              <Nav.Link className="nav-links text-dark" href="/Reservations">Reservations</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
