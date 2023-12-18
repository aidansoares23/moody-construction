import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../images/FinalLogo.png";
import { Link } from "react-router-dom";

function OurNavbar() {
  return (
    <Navbar expand="lg" className="nav-container navbar-dark" style={{ backgroundColor: "#012D3D" }}>
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img src={Logo} alt="Logo" className="nav-logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ color: "#fff" }}>
              Home
            </Nav.Link>
            <Nav.Link href="/our-work" style={{ color: "#fff" }}>
              Our Work
            </Nav.Link>
            <Nav.Link href="/contact" style={{ color: "#fff" }}>
              Contact
            </Nav.Link>
            <Nav.Link href="/services" style={{ color: "#fff" }}>
              Services
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default OurNavbar;
