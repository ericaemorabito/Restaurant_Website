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
import beefPasta from "../images/beefpasta.jpeg";
import Menu from "../components/Menu";

const MenuScreen = () => {
  // // Set the default to lunch
  // const [menuType, setMenu] = useState('lunch');

  // const handleLunchMenu = () => {
  //   // console.log(lunchMenu)
  // }

  // if lunch button clicked --> render Menu with lunch props
  const [menu, setMenu] = useState("lunch");

  return (
    <Container>
      {/* Menu Image */}
      <Row>
        <img
          id="menu-image"
          src={beefPasta}
          alt="pastas on table"
          className="img-fluid my-5"
        ></img>
      </Row>

      {/* Title  */}
      <Row>
        <h1 className="subtitle text-center my-5">Menu</h1>
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
