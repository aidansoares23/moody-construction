import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../images/FinalLogo.png";

function OurNavbar() {
  return (
    <Navbar expand="lg" className="nav-container">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Logo" className="nav-logo" />
        </Navbar.Brand>
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default OurNavbar;
