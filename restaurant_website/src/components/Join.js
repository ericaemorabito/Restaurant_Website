import React from "react";
import "../styles/join.css";
import "../styles/infoCard.css";
import { Button } from "react-bootstrap";
import { motion } from 'framer-motion';

const Join = ({makeReservation}) => {
  return (
    <>
      <motion.div fluid id="join" className="mt-5 w-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.1, duration: 1} }}>
        <div className="color-overlay  d-flex flex-column align-items-center justify-content-center">
          <h3 className="my-2 text-light subtitle">Join Us for Dinner</h3>
          <Button className="my-3 black-button card-button" onClick={makeReservation} variant="dark">
            RESERVATIONS
          </Button>
        </div>
      </motion.div>
    </>
  );
};

export default Join;
