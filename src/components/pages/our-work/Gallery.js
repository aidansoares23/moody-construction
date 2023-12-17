import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import JD1 from "../../images/JD1.jpg";
import JD2 from "../../images/JD2.jpg";
import JD3 from "../../images/JD3.jpg";
import JD4 from "../../images/JD4.jpg";
import JD5 from "../../images/JD5.jpg";
import JD6 from "../../images/JD6.jpg";
import JD7 from "../../images/JD7.jpg";
import JD8 from "../../images/JD8.jpg";
import JD9 from "../../images/JD9.jpg";
import JD10 from "../../images/JD10.jpg";
import JD11 from "../../images/JD11.jpg";
import JD12 from "../../images/JD12.jpg";
import JD13 from "../../images/JD13.jpg";
import JD14 from "../../images/JD14.jpg";
import JD15 from "../../images/JD15.jpg";
import JD16 from "../../images/JD16.jpg";
import JD17 from "../../images/JD17.jpg";
import JD18 from "../../images/JD18.jpg";
import JD19 from "../../images/JD19.jpg";
import JD20 from "../../images/JD20.jpg";
import JD21 from "../../images/JD21.jpg";
import JD22 from "../../images/JD22.jpg";
import JD23 from "../../images/JD23.jpg";
import JD24 from "../../images/JD24.jpg";
import JD25 from "../../images/JD25.jpg";
import JD26 from "../../images/JD26.jpg";
import JD27 from "../../images/JD27.jpg";
import JD28 from "../../images/JD28.jpg";
import JD29 from "../../images/JD29.jpg";

function Gallery() {
  const JDImages = {
    JD1,
    JD2,
    JD3,
    JD4,
    JD5,
    JD6,
    JD7,
    JD8,
    JD9,
    JD10,
    JD11,
    JD12,
    JD13,
    JD14,
    JD15,
    JD16,
    JD17,
    JD18,
    JD19,
    JD20,
    JD21,
    JD22,
    JD23,
    JD24,
    JD25,
    JD26,
    JD27,
    JD28,
    JD29,
  };

  return (
    <Container>
      <h2 style={{ borderBottom: "2px solid #007bff", paddingBottom: "5px" }}>
        Our Work
      </h2>
      <Row xs={1} md={2} lg={3}>
        {Object.keys(JDImages).map((key, index) => (
          <Col key={index} className="mb-3">
            <img
              src={JDImages[key]}
              alt={`JD${index + 1}`}
              style={{ width: "100%", height: "40vh" }}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;
