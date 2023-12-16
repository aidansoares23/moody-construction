import React from "react";
import { Row, Col } from "react-bootstrap";
import JD1 from "../../images/JD1.jpg"

function Gallery() {
  const JDImages = Array.from({ length: 29 }, (_, index) => require(`../../images/JD${index + 1}.jpg`).default);

  return (
    <div>
      <Row xs={1} md={2} lg={4}>
        {JDImages.map((imageSrc, index) => (
          <Col key={index} className="mb-4">
            <img src={imageSrc} alt={`JD${index + 1}`} className="img-fluid" />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Gallery;
