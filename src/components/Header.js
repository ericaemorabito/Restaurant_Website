import React, { useState } from "react";
import "bootstrap";
import Colleta from "../images/Colleta.png";
import {
  Nav,
  Navbar,
  Offcanvas,
  Container,
} from "react-bootstrap";
import "../styles/header.css";

const Header = (props) => {
  // Offcanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="mb-1">
        <Container fluid>
          <Navbar.Brand className="mx-2" href="/Restaurant_Website/#">
            <img
              src={Colleta}
              width="200"
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbarLabel-expand-lg" />
          <Navbar.Offcanvas
            collapseOnSelect
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <button
                  className="nav-links nav-buttons "
                  onClick={props.handleHours}
                >
                  HOURS & LOCATION
                </button>
                <Nav.Link className="nav-links text-center" href="/Restaurant_Website/#/menu">
                  MENU
                </Nav.Link>
                <Nav.Link className="nav-links text-center" href="/Restaurant_Website/#/about">
                  ABOUT
                </Nav.Link>

                <button
                  className="nav-links nav-buttons"
                  onClick={props.handleReservation}
                >
                  RESERVATIONS
                </button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
     
      {/* <Navbar defaultExpanded collapseOnSelect expand="lg">
        <Navbar.Brand className="mx-2" href="/">
          <img
            src={brand}
            width="200"
            height="70"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="d-lg-none"
          onClick={handleShow}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav id="nav" as="div" className="me-auto justify-contents-end">
            <Button
              className="nav-links nav-buttons"
              onClick={props.handleHours}
            >
              HOURS & LOCATION
            </Button>
            <Nav.Link className="nav-links" href="/menu">
              MENU
            </Nav.Link>
            <Nav.Link className="nav-links" href="/about">
              ABOUT
            </Nav.Link>
            <Button
              className="nav-links nav-buttons"
              onClick={props.handleReservation}
            >
              RESERVATIONS
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
    </header>
  );
};

export default Header;
