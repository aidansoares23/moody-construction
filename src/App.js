import "./App.css";
import Home from "./components/pages/home/Home";
import Footer from "./components/pages/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OurNavbar from "./components/pages/navbar/Navbar";
import Contact from "./components/pages/contact/Contact";
import Gallery from "./components/pages/our-work/Gallery";
import StartAtTop from './StartAtTop';
import Service from "./components/pages/service/Service";

function App() {
  return (
    <div className="App">
      <Router>
        <StartAtTop />
        <OurNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-work" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
