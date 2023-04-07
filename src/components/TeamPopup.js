import React from "react";
import "../styles/hours.css";

const TeamPopup = (props) => {
  return (
    // {name && 'Maria' (<div>Maria</div>)}
    // <div>Testing</div>
    <>
      <div className="popup-box ">
        <div className="box">
          <button className="btn-close" onClick={props.handleClose}></button>
          <h2 className="text-center subtitle">{props.name}</h2>
          <p className="text-center styled-text">{props.story}</p>
        </div>
      </div>
    </>
  );
};

export default TeamPopup;
