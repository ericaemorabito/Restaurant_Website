import React from "react";
import "../styles/menuScreen.css";
import {
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import beefPasta from "../images/beefpasta.jpeg";

const MenuScreen = () => {
  return (
    <Container>
      <Row>
        <img
          id="menu-image"
          src={beefPasta}
          alt="pastas on table"
          className="img-fluid"
        ></img>
      </Row>
      <Row>
        <h1 className="text-center my-5">Menu</h1>
      </Row>
      <Row>
        <ListGroup horizontal as="ul" variant="flush">
          <ListGroup.Item as="li" action className="menu-buttons">
            Lunch{" "}
          </ListGroup.Item>
          <ListGroup.Item as="li" action className="menu-buttons">
            Dinner
          </ListGroup.Item>
          <ListGroup.Item as="li" action className="menu-buttons">
            Dessert{" "}
          </ListGroup.Item>
          <ListGroup.Item as="li" action className="menu-buttons">
            Wine{" "}
          </ListGroup.Item>
        </ListGroup>
      </Row>
    </Container>
  );
};

export default MenuScreen;
