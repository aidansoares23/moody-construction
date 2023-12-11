import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Logo from "../../images/LogoFinal.png";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import backgroundPhoto from "../../images/IMG_1003.jpg";
import OurNavbar from "../navbar/Navbar.js";

function Home() {
  return (
    <div className="home-container">
      {/*Header*/}
      <Container fluid className="header-wrapper-container">
  <OurNavbar />
  <div className="header-mask-container">
    <Row className="header-wrapper">
      <Col
        xs={12}
        md={8}
        className="header-text d-flex flex-column align-items-center justify-content-center pt-md-5"
      >
        <div className="text-content">
          <h1 className="display-4 custom-big-text-h1">
            JD MOODY CONSTRUCTION
          </h1>
          <h3 className="font-weight-bold custom-big-text-h3">
            Proudly Serving San Luis Obispo and Neighboring Areas
          </h3>
          <div className="buttons-container">
            <Link to="/our-work" className="btn">
              See our work
            </Link>
            <Link to="/contact" className="btn">
              Contact us
            </Link>
          </div>
        </div>
      </Col>
      <Col xs={12} md={4} className="text-center pt-md-5">
        <div className="header-logo-container">
          <img src={Logo} alt="Logo" className="header-logo" />
        </div>
      </Col>
    </Row>
  </div>
</Container>


      {/*Body*/}
      <div className="body-container">

        <Container>
          <Row>
            {/* Left side with a box containing text */}
            <Col xs={12} md={6} className="left-box">
              <h2>Your Project, Our Expertise</h2>
              <p>
                From bathroom remodels to property maintenance, JD Moody
                Construction is your go-to partner for turning dreams into
                reality. We offer a wide range of services, including property
                maintenance, fence installation, ADU construction, flooring,
                carpentry, kitchen and bath remodeling, painting, and more. No
                project is too big or too small—we're here for you!
              </p>
            </Col>

            {/* Right side with a responsive carousel */}
            <Col xs={12} md={6} className="right-carousel">
              <Carousel>
                <Carousel.Item>
                  {/* Your first carousel item content */}
                  <img
                    src={Logo}
                    alt="First slide"
                    style={{ height: "30vh", objectFit: "cover" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  {/* Your second carousel item content */}
                  <img
                    src={Logo}
                    alt="Second slide"
                    style={{ height: "30vh", objectFit: "cover" }}
                  />
                </Carousel.Item>
                {/* Add more carousel items as needed */}
              </Carousel>
              <Link to="/our-work">
                <Button variant="primary" className="mt-3">
                  See more
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>

        {/*Overlap Info*/}
        <Container>
      <Row className="overlap-container">
        {/* Box with background color and text */}
        <Col md={6} className="text-box">
          <h2>Text Box</h2>
          <p>This box is filled with text and has a background color.</p>
          {/* Add more text or content as needed */}
        </Col>

        {/* Box with an image */}
        <Col md={6} className="image-box">
          {/* You can use an image tag or set the background image in CSS */}
          <img src={backgroundPhoto} alt="Box" className="img-fluid" />
          {/* Add more content or adjust the image as needed */}
        </Col>
      </Row>
    </Container>
      </div>
    </div>
  );
}

export default Home;
