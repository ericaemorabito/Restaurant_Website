import React, { useState } from "react";
import "./App.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import MenuScreen from "./screens/MenuScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hours from "./components/Hours";
import Reservation from './components/Reservation';

import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
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
        {openHours && <Hours handleClose={toggleHours} />}
        {openReservation && <Reservation handleClose={toggleReservation} />}
        <Routes>
          <Route path="/" element={<HomeScreen makeReservation={toggleReservation}/>}></Route>
          <Route path="/about" element={<AboutScreen />}></Route>
          <Route path="/menu" element={<MenuScreen />}></Route>
        </Routes>
      </main>
      <Footer handleHours={toggleHours} makeReservation={toggleReservation}/>
    </Router>
  );
}

export default App;
