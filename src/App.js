import "./App.css";
import Home from "./components/pages/home/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/our-work" Component={Home} />
          <Route path="/contact" Component={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
