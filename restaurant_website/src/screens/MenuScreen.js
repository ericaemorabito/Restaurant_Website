import React, {useState} from "react";
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
import Menu from '../components/Menu'

const MenuScreen = () => {

  // Set the default to lunch
  const [menuType, setMenu] = useState('lunch');

  const handleLunchMenu = () => {
    // console.log(lunchMenu)
  }

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
      <div className="menu-buttons-div">
        <ListGroup horizontal id="btn-list">
          <li>
            <Button className="menu-btn" variant="dark" onClick={handleLunchMenu}>Lunch</Button>
          </li>
          <li>
            <Button className="menu-btn" variant="dark">Dinner</Button>
          </li>
          <li>
            <Button className="menu-btn" variant="dark">Dessert</Button>
          </li>
          <li>
            <Button className="menu-btn" variant="dark">Wine</Button>
          </li>
        </ListGroup>
      </div>
      <Menu />
      
    </Container>
  );
};

export default MenuScreen;
