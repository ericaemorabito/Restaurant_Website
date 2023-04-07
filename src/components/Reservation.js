import React, { useState } from "react";
import "../styles/reservation.css";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from '@emailjs/browser';

const Reservation = (props) => {
  const [startDate, setStartDate] = useState(new Date());

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Reservation Sent!");
    emailjs.sendForm('service_ul0u4xg', 'template_ad6wmqu', e.target, 'YSI8La-h1GQLdgKpd');
  };

  return (
    <>
      <Container fluid className="popup-box">
        <div className="box py-5 px-5">
          <button className="btn-close" onClick={props.handleClose}></button>
          <h2 className="text-center subtitle">Reservations</h2>
          <Row>
            <form onSubmit={sendEmail}>
              <Col>
                {/* Enter Email */}

                <Form.Label htmlFor="email">Email address</Form.Label>
                <Form.Control
                id="email"
                  type="email"
                  placeholder="Enter email"
                  className="select"
                />
                {/* Choose Number of People */}
                <Form.Label htmlFor="people">Number of People</Form.Label>
                <Form.Select
                  id="people"
                  className="select"
                  aria-label="Default select example"
                >
                  <option>Number of People</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="3">5</option>
                  <option value="3">6 or more</option>
                </Form.Select>

                {/* Choose Date */}
                <Form.Label htmlFor="date-picker">Date</Form.Label>
                <DatePicker
                  id="date-picker"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />

                {/* Choose Time */}
                <Form.Label htmlFor="time">Time</Form.Label>
                <Form.Select
                  id="time"
                  className="select"
                  aria-label="Default select example"
                >
                  <option>Time</option>
                  <option value="1">5:00 PM</option>
                  <option value="2">5:30 PM</option>
                  <option value="3">6:00 PM</option>
                  <option value="4">6:30 PM</option>
                  <option value="5">7:00 PM</option>
                  <option value="6">7:30 PM</option>
                  <option value="7">8:00 PM</option>
                  <option value="8">8:30 PM</option>
                </Form.Select>

                {/* Make Reservation Button */}
                <Col className="d-flex justify-content-center">
                  <Button
                    type="submit"
                    className="make-res-btn black-button mt-2"
                  >
                    MAKE RESERVATION
                  </Button>
                </Col>
              </Col>
            </form>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Reservation;
