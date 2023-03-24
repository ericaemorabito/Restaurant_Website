import React, { useState } from "react";
import "../styles/menuScreen.css";
import {
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import Menu from "../components/Menu";
import olivePasta from "../images/olivepasta.jpeg";
import cheesy from "../images/cheesy.jpeg";
const MenuScreen = () => {

  const [menu, setMenu] = useState("lunch");

  return (
    <Container fluid>
      {/* Menu Image */}
      <Row>
        <h1 className="menu-page-title">Menu</h1>
        <img
          id="menu-image"
          src={cheesy}
          alt="pastas on table"
          className="img-fluid my-5"
        ></img>
      </Row>

      {/* Different Menu Buttons */}
      <div className="menu-buttons-div">
        <ListGroup horizontal id="btn-list">
          <li>
            <Button className="menu-btn black-button" variant="dark" onClick={() => {setMenu('lunch')}}>
              LUNCH
            </Button>
          </li>
          <li>
            <Button className="menu-btn black-button" variant="dark" onClick={() => {setMenu('dinner')}}>
              DINNER
            </Button>
          </li>
          <li>
            <Button className="menu-btn black-button" variant="dark" onClick={() => {setMenu('dessert')}}>
              DESSERT
            </Button>
          </li>
          <li>
            <Button className="menu-btn black-button" variant="dark" onClick={() => {setMenu('wine')}}>
              WINE
            </Button>
          </li>
        </ListGroup>
      </div>

      {/* Display the Menu */}
        <Menu menu={menu} />
    </Container>
  );
};

export default MenuScreen;
