import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../images/LogoFinal.png";

function Footer() {
  return (
    <div className="footer-container mt-4 pb-4 pt-4">
      <Container >
        <Row className="footer-wrapper">
          <Col xs={12} md={4} className="footer-logo">
            <img src={Logo} alt="footer logo" />
          </Col>
          <Col xs={12} md={4} className="footer-contact-info left-align-text">
            <p>JD Moody Construction</p>
            <p>P.O. Box: 13745</p>
            <p>San Luis Obispo</p>
            <p>LIC # 1060355</p>
          </Col>
          <Col xs={12} md={4} className="footer-contact-info-2 left-align-text">
            <Row>
              <a href="mailto:josh@jdmoodyconstruction.com">
                josh@jdmoodyconstruction.com
              </a>
            </Row>
            <Row className="pt-2">
              <a href="tel:8053161217">(805) 316-1217</a>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
