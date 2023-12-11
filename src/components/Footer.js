import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./Footer.css";
import Logo from "./images/LogoFinal.png";

function Footer() {
  return (
    <div className="footer-container">
      <Container>
        <Row className="footer-wrapper">
          <Col xs={12} md={4} className="footer-logo">
            <img src={Logo} alt="footer logo" />
          </Col>
          <Col xs={12} md={4} className="footer-contact-info">
            <p>JD Moody Construction</p>
            <p>P.O. Box: 13745</p>
            <p>San Luis Obispo</p>
            <p>LIC # 1060355</p>
          </Col>
          <Col xs={12} md={4} className="footer-contact-info-2">
            <p>email: josh@jdmoodyconstruction.com</p>
            <p>phone: (214) 499-5730</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
