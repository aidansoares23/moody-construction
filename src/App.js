import "./App.css";
import Home from "./components/pages/home/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OurNavbar from "./components/pages/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
      <OurNavbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/our-work" Component={Home} />
          <Route path="/contact" Component={Home} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
