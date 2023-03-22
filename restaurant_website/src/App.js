import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import HoursScreen from "./screens/HoursScreen";
import MenuScreen from "./screens/MenuScreen";
import ReservationScreen from "./screens/ReservationScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

function App() {
  // Open and Close Popup
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Header handleClose={togglePopup} />
      <main>
      {isOpen && (
            <Popup
              handleClose={togglePopup}
              content={<div>content in props</div>}
            />
          )}
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/about" element={<AboutScreen />}></Route>
          <Route path="/menu" element={<MenuScreen />}></Route>
        {/* <ReservationScreen /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
