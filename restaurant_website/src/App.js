import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import HoursScreen from "./screens/HoursScreen";
import MenuScreen from "./screens/MenuScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import Hours from "./components/Hours";
import Reservation from './components/Reservation'

function App() {
  // Open and Close Popup
  // const [isOpen, setIsOpen] = useState(false);

  // const togglePopup = () => {
  //   setIsOpen(!isOpen);
  // };

  // Open Hours
  const [openHours, setHours] = useState(false);

  const toggleHours = () => {
    setHours(!openHours);
  };

  // Open Reservations
  const [openReservation, setReservation] = useState(false);

  const toggleReservation = () => {
    setReservation(!openReservation);
  };

  return (
    <Router>
      <Header handleHours={toggleHours} handleReservation={toggleReservation}/>
      <main>
        {/* {isOpen && (
          <Popup
            handleClose={togglePopup}
            content={<div>content in props</div>}
          />
        )} */}
        {openHours && <Hours handleClose={toggleHours} />}
        {openReservation && <Reservation handleClose={toggleReservation} />}
        <Routes>
          <Route path="/" element={<HomeScreen makeReservation={toggleReservation}/>}></Route>
          <Route path="/about" element={<AboutScreen />}></Route>
          <Route path="/menu" element={<MenuScreen />}></Route>
          {/* <ReservationScreen /> */}
        </Routes>
      </main>
      <Footer makeReservation={toggleReservation}/>
    </Router>
  );
}

export default App;
