import React from "react";
import "../styles/hours.css";

const Hours = (props) => {
  return (
    <>
      <div className="popup-box ">
        <div className="box">
          <button className="btn-close" onClick={props.handleClose}></button>
          <h2 className="text-center subtitle">Hours & Location</h2>
          <p className="hours mt-5 text-center">
            <span className="days">MON & TUES</span>: CLOSED
          </p>
          <p className="hours text-center">
            <span className="days">WEDS - SUN</span>: 1 PM - 9 PM
          </p>
          <p className="address mt-4 text-center">
          3885 US-62, Calvert City, KY 42029
          </p>
          <p className="mt-4 map d-flex justify-content-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.2898291296174!2d-88.33853624952344!3d37.00288147980863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887a692cdc27f597%3A0xea955b37b71f33a9!2zTWFtYSBE4oCZcw!5e0!3m2!1sen!2sus!4v1679604731393!5m2!1sen!2sus"
              width="400"
              title='restaurant-map'
              height="300"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </p>
        </div>
      </div>
    </>
  );
};

export default Hours;
