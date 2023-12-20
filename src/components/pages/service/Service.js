import React from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";

function Service() {
  return (
    <Container style={{ minHeight: "100vh" }}>
      <h2
        className="page-title"
        style={{ borderBottom: "2px solid #007bff", paddingBottom: "5px" }}
      >
        Services
      </h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Property Services</Accordion.Header>
          <Accordion.Body>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>Property Maintenance</li>
              <li>Service Contract Agreements</li>
              <li>Interior and Exterior</li>
              <li>Residential, rental, multi-family, and commercial</li>
              <li>Electrical</li>
              <li>Plumbing</li>
              <li>Painting</li>
              <li>Drywall</li>
              <li>Tape, bed, texture</li>
              <li>Rough and finish carpentry</li>
              <li>Flooring repair and installation</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Interior Services</Accordion.Header>
          <Accordion.Body>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>Flooring and Carpentry</li>
              <li>Kitchen and Bath Design and Remodeling</li>
              <li>Drywall and Painting</li>
              <li>Electrical</li>
              <li>Plumbing</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Other Services</Accordion.Header>
          <Accordion.Body>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>Deck Construction</li>
              <li>Client Tenant Improvement</li>
              <li>Rough Framing</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default Service;
