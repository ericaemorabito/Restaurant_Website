import React from "react";
import "../styles/menu.css";
import { Container, Row } from "react-bootstrap";

const Menu = ({ menu }) => {
  return (
    <Container className="d-flex flex-column align-items-center my-5">
      <Row className="menu-row">
        <h2>Antipasti</h2>
        <p className="menu-item">
          <span className="menu-item-name">MEATBALLS </span>
          pork, and veal, tomato, polenta, parmesan, basil
          <span className="menu-item-price">$ 9</span>
        </p>
        <p className="menu-item">
          <span className="menu-item-name">PEI MUSSELS </span>
          white wine, spicy tomato, saffron, preserved lemon, herbs
          <span className="menu-item-price">$ 11</span>
        </p>
        <p className="menu-item">
          <span className="menu-item-name">BURRATA </span>
          oasted fall squash, arugula, parmesan, aleppo, pumpkin seed vinaigrette
          <span className="menu-item-price">$ 11</span>
        </p>
        <p className="menu-item">
          <span className="menu-item-name">CRISPY POTATOES </span>
          cacio e pepe aioli, pecorino
          <span className="menu-item-price">$ 7</span>
        </p>
      </Row>
      
      <Row className="menu-row">
        <h2>Pizza</h2>
        <p className="menu-item">
          <span className="menu-item-name">MARGHERITA </span>
          san marzano tomato, mozzarella, basil
          <span className="menu-item-price">$ 10</span>
        </p>
        <p className="menu-item">
          <span className="menu-item-name">CALABRESE </span>
          calabrese salami, calabrian chili, olive, mozzarella, honey
          <span className="menu-item-price">$ 9</span>
        </p>
      </Row>
    </Container>
  );
};

export default Menu;
