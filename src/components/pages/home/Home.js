import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import JD8 from "../../images/JD8.jpg";
import JD21 from "../../images/JD21.jpg";
import JD14 from "../../images/JD14.jpg";

function Home() {
  return (
    <div className="home-container">
      {/*Header*/}
      <Container
      fluid
      className="header-wrapper-container mb-5 d-flex align-items-center justify-content-center"
    >
      <Col className="header-text">
        <div className="pb-3 pt-3" style={{ fontFamily: 'Playfair Display, serif' }}>
          <h1 className="pb-2 fadeInFirst" style={{ textShadow: '2px 2px 4px #F5E000', fontWeight: 1300}}>
            <strong>JD MOODY CONSTRUCTION</strong>
          </h1>
          <h6 className="pb-2 fadeInSecond" style={{ textShadow: '4px 4px 6px #000000', fontWeight: 750 }}>
            <strong>Proudly Serving San Luis Obispo and Neighboring Areas</strong>
          </h6>
        </div>
      </Col>
    </Container>

      {/*Body*/}
      <div className="body-container">
        <Container className="mb-5 ">
          <Row>
            {/* Left side with a box containing text */}
            <Col xs={12} md={6} className="left-box left-align-text">
              <h3 className="center-text highlighted-header">
                Your Project, Our Expertise
              </h3>
              <p>
                From bathroom remodels to property maintenance, JD Moody
                Construction is your go-to partner for turning dreams into
                reality. We offer a wide range of services, including property
                maintenance, remodeling, ADU construction, flooring, carpentry,
                kitchen and bath, painting, fence installation and more. No
                project is too big or too small—we're here for you!
              </p>
            </Col>

            {/* Right side with a responsive carousel */}
            <Col xs={12} md={6} className="right-carousel">
              <Carousel>
                <Carousel.Item>
                  {/* Your first carousel item content */}
                  <img
                    src={JD8}
                    alt="First slide"
                    style={{ height: "40vh", objectFit: "cover" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={JD21}
                    alt="Second slide"
                    style={{ height: "40vh", objectFit: "cover" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={JD14}
                    alt="Third slide"
                    style={{ height: "40vh", objectFit: "cover" }}
                  />
                </Carousel.Item>
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
        <Container className="left-align-text">
          <Row className="overlap-container ml-1 mr-5">
            <Row className="pt-2 pb-2">
              <h3 className="center-text highlighted-header">Why Choose Us?</h3>
            </Row>
            <Col md={6} className="image-box">
              <img src={JD21} alt="Box" className="img-fluid" />
            </Col>
            <Col md={6} className="text-box">
              <p>
                JD Moody Construction is a construction and contracting firm
                based in San Luis Obispo, California. Founded with a passion for
                construction and a commitment to delivering top-notch services,
                we've been serving the community for over two decades. Our team
                brings together a diverse set of skills, enabling us to handle
                projects of all sizes and complexities.
              </p>
              <p>
                As a versatile construction company, we specialize in property
                maintenance, remodeling, and both commercial and residential new
                construction projects. We're dedicated to transforming your
                visions into reality, whether it involves revitalizing existing
                spaces or crafting innovative designs for new builds. Our
                dedication to quality, professionalism, and customer
                satisfaction drives everything we do.
              </p>
              <p>
                We take on projects with a focus on delivering excellence,
                attention to detail, and a deep commitment to meeting and
                exceeding our clients' expectations. JD Moody Construction is
                your trusted partner for construction needs in San Luis Obispo
                County and the surrounding areas. When you choose us, you're
                choosing experience, quality, and a team that's passionate about
                building dreams.
              </p>
            </Col>
          </Row>
        </Container>

        <Container className="pt-5 pb-5">
          <Row>
            <h3 className="highlighted-header">Ready to start?</h3>
          </Row>
          <Row className="text-center">
            <p>Contact us today to transform your dreams into a reality.</p>
          </Row>
          <Row className="justify-content-center text-center">
            <Col xs={6}>
              <Link to="/contact">
                <Button>Start Planning</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
