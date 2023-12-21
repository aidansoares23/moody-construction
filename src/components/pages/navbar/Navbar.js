import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../images/FinalLogo.png";
import { Link, useNavigate } from "react-router-dom";

function OurNavbar() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const closeMobileMenu = () => setExpanded(false);

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    marginRight: "15px",
    fontSize: "18px",
    transition: "text-decoration 0.3s ease-in-out",
  };

  const phoneNumberStyle = {
    color: "#F5E000",
  };

  return (
    <Navbar
      expand="lg"
      className="nav-container navbar-dark"
      style={{ backgroundColor: "#012D3D" }}
      expanded={expanded}
    >
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img src={Logo} alt="Logo" className="nav-logo" />
          </Navbar.Brand>
        </Link>
        <a href="tel:8053161217" style={phoneNumberStyle}>
              <h2>
                <i className="fa-solid fa-phone"></i> (805) 316-1217
              </h2>
            </a>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
                closeMobileMenu();
              }}
            >
              <Link to="/" style={linkStyle}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/our-work");
                closeMobileMenu();
              }}
            >
              <Link to="/our-work" style={linkStyle}>
                Our Work
              </Link>
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/contact");
                closeMobileMenu();
              }}
            >
              <Link to="/contact" style={linkStyle}>
                Contact
              </Link>
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/services");
                closeMobileMenu();
              }}
            >
              <Link to="/services" style={linkStyle}>
                Services
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default OurNavbar;
