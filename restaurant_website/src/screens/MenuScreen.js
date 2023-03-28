import React, { useState } from "react";
import "../styles/menuScreen.css";
import {
  Container,
  Row,
  Button,
  ListGroup,
} from "react-bootstrap";
import Menu from "../components/Menu";
import cheesy from "../images/cheesy.jpeg";
import { motion } from 'framer-motion';

const MenuScreen = () => {

  const [menu, setMenu] = useState("lunch");

  return (
    <Container fluid >
      {/* Menu Image */}
      <motion.div initial={{ opacity: 0 }}
    whileInView={{ opacity: 1, transition: { duration: 1.2} }}>
        <h1 className="menu-page-title">Menu</h1>
        <img
          id="menu-image"
          src={cheesy}
          alt="pastas on table"
          className="img-fluid my-5"
        ></img>
      </motion.div>

      {/* Different Menu Buttons */}
      <motion.div className="menu-buttons-div" initial={{ opacity: 0 }}
    whileInView={{ opacity: 1, transition: { duration: 1.2} }}>
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
      </motion.div>

      {/* Display the Menu */}
        <Menu menu={menu} />
    </Container>
  );
};

export default MenuScreen;
