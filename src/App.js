import "./App.css";
import Home from "./components/pages/home/Home";
import Footer from "./components/pages/Footer";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
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
          <Route path="/" Component={Home} />
          <Route path="/our-work" Component={Gallery} />
          <Route path="/contact" Component={Contact} />
          <Route path="/services" Component={Service} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
