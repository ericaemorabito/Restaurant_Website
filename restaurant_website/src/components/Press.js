import React from "react";
import '../styles/press.css'
// import { useNavigate } from 'react-router-dom'
import { Row, Col, Button } from "react-bootstrap";
import { motion } from 'framer-motion';

const Press = () => {

  // const navigate = useNavigate();

  return (
    <>
      <motion.div className="container w-75 mb-3 d-flex flex-column align-items-center justify-content-center " id="press-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.1, duration: 1.2} }}>
        <h3 className="text-center pt-5 subtitle">Featured Press</h3>
        <Row className="press-row">
          <Col
            sm={12}
            m={6}
            lg={6}
            className="py-3 d-flex flex-column align-items-center"
          >
            <a href="https://media-cdn.getbento.com/accounts/4e84fa105d04379104b8a7f98f1f966d/media/sFZNf18TkC8dcSs5n4Fu_Colletta%20Cary_Eater%20Carolinas_Jan2023.AM.png" target="_blank">
            <Button className="press-button py-3 px-3 my-2">EATER CAROLINAS</Button>
            </a>
            <p className=" py-3 px-3 my-2">Top 10 Hottest Restaurants</p>
          </Col>
          <Col
            sm={12}
            m={6}
            lg={6}
            className="py-3 d-flex flex-column align-items-center"
          >
            <a href="https://www.carymagazine.com/food-and-dining/restaurant-profile-colletta/" target="_blank">
            <Button className="press-button py-3 px-3 my-2">CARY MAGAZINE </Button>
            </a>
            <p className=" py-3 px-3 my-2">Restaurant Profile</p>
          </Col>
        </Row>
      </motion.div>
    </>
  );
};

export default Press;
