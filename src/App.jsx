import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CarList from "./components/CarList";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CarList />
      <Booking />
      <Contact />
      <Footer />
    </>
  );
}

export default App;