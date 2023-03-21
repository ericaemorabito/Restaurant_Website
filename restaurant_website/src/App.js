import "./App.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import HoursScreen from "./screens/HoursScreen";
import MenuScreen from "./screens/MenuScreen";
import ReservationScreen from './screens/ReservationScreen';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <HomeScreen />
        <AboutScreen />
        <HoursScreen />
        <MenuScreen />
        <ReservationScreen />
      </main>
      <Footer />
    </>
  );
}

export default App;
