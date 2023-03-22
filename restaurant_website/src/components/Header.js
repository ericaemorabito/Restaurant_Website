import React from "react";
import "bootstrap";
import Colleta from "../images/Colleta.png";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import '../styles/header.css';

const Header = (props) => {
  return (
    <header>
      <Navbar expand="lg">
          <Navbar.Brand href="/">
            <img
              src={Colleta}
              width="200"
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav id='nav' as='div' className="justify-contents-end">
              <Button className="nav-links nav-buttons" onClick={props.handleClose}>Hours & Location</Button>
              <Nav.Link className="nav-links" href="/menu">Menu</Nav.Link>
              <Nav.Link className="nav-links" href="/about">About</Nav.Link>
              <Button className="nav-links nav-buttons" onClick={props.handleClose}>Reservations</Button>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
