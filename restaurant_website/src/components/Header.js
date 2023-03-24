import React from "react";
import "bootstrap";
import Colleta from "../images/Colleta.png";
import brand from "../images/logo/Brand-logo.png";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import "../styles/header.css";

const Header = (props) => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand className="mx-2" href="/">
          <img
            src={brand}
            width="200"
            height="70"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          ></img>
        </Navbar.Brand>

        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
  </div>
</div>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav id='nav' as='div' className="justify-contents-end">
              <Button className="nav-links nav-buttons" onClick={props.handleHours}>HOURS & LOCATION</Button>
              <Nav.Link className="nav-links" href="/menu">MENU</Nav.Link>
              <Nav.Link className="nav-links" href="/about">ABOUT</Nav.Link>
              <Button className="nav-links nav-buttons" onClick={props.handleReservation}>RESERVATIONS</Button>
            </Nav>
          </Navbar.Collapse> */}
      </Navbar>
    </header>
  );
};

export default Header;
