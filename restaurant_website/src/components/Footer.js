import React from "react";
import '../styles/footer.css'

const Footer = ({handleHours, makeReservation}) => {
  return (
    <footer className="mb-3 mt-2 d-flex justify-content-center align-items-center">
          <p>CONTACT</p>
          <button className="footer-btn" onClick={handleHours}>HOURS & LOCATION</button>
          <button className="footer-btn" onClick={makeReservation}>RESERVATIONS</button>
    </footer>
  );
};

export default Footer;
