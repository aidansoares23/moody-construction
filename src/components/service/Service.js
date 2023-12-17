import React from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";

function Service() {
  return (
    <Container>
      <h2 style={{ borderBottom: "2px solid #007bff", paddingBottom: "5px" }}>
        Services
      </h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Property Services</Accordion.Header>
          <Accordion.Body>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>Property Maintenance</li>
              <li>Fence Installation</li>
              <li>Accessory Dwelling Units</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Interior Services</Accordion.Header>
          <Accordion.Body>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>Flooring and Carpentry</li>
              <li>Kitchen and Bath Remodeling</li>
              <li>Drywall and Painting</li>
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
