import React from "react";
import "../styles/popup.css";

const Popup = (props) => {
  return (
    <>
      <div className="popup-box">
        <div className="box">
          <button className="btn-close" onClick={props.handleClose}></button>
          <h2 className="text-center">Title</h2>
          <p className="text-center">
            {props.content}
            Join us on Saturdays + Sundays from 11 a.m. - 2:30 p.m and enjoy
            Italian-inspired brunch favorites alongside Colletta classics.
          </p>
        </div>
      </div>
    </>
  );
};

export default Popup;
