import React from "react";
import "../styles/infoCard.css";
import { Container, Col, Button } from "react-bootstrap";
import { motion } from 'framer-motion';

const InfoCard = ({ home, title, card, image, makeReservation }) => {
  return (
    <>
      <Container fluid>
        <motion.div className="row h-75 mx-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.1, duration: 1} }}>
          <Col
            sm={12}
            m={6}
            lg={6}
            className="py-3 d-flex flex-column align-items-center justify-content-center"
          >
            <div
              id="image-border-top"
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <img
                src={image}
                className="info-card-image img-resize"
                alt="tomato bruschetta on table"
              ></img>
            </div>
          </Col>
          <Col
            sm={12}
            m={6}
            lg={6}
            className="py-3 d-flex flex-column align-items-center justify-content-center"
          >
            <div className="info-card py-5 px-5">
              <h2 className="py-2 subtitle">{title}</h2>
              <p className="py-1 styled-text">{card}</p>
              {home && (
                <Button
                  className="black-button card-button"
                  onClick={makeReservation}
                >
                  MAKE A RESERVATION
                </Button>
              )}
            </div>
          </Col>
        </motion.div>
      </Container>
    </>
  );
};

export default InfoCard;
