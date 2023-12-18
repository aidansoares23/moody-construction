import React, { useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j80yggl",
        "template_b8bz6at",
        e.target,
        "ABECB0YzLUpqVVBxL"
      )
      .then(
        (result) => {
          alert("Message successfully sent!");
          form.current.reset();
        },
        (error) => {
          alert("Unsuccessful message, please try again");
        }
      );
  };

  return (
    <Container className="contact-wrapper ">
      <h2
        className="page-title"
        style={{ borderBottom: "2px solid #007bff", paddingBottom: "5px" }}
      >
        Contact Us
      </h2>

      <Row className="align-items-center left-align-text">
        <Col md={6}>
          <p>
            Ready for a high-quality and professional experience? Give us a
            call, send an email, or use the provided form. We are thrilled to
            begin working with you!
          </p>
          <Row className="center-text">
            <Col>
              <a href="tel:2144995730">
                <Button className="mt-3 mx-auto w-50">Call Now</Button>
              </a>
            </Col>
          </Row>

          <Row className="center-text">
            <Col>
              <a href="mailto:josh@jdmoodyconstruction.com">
                <Button className="mt-3 mx-auto w-50">Email</Button>
              </a>
            </Col>
          </Row>
        </Col>
        <Col md={6} className="contact-form">
          <h3 className="center-text highlighted-header">Send us a message</h3>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="from_name"
                required
                placeholder="Provide your name here"
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="from_email"
                required
                placeholder="Provide your email here"
              />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label>Message:</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows="8"
                required
                placeholder="Enter your message here"
              />
            </Form.Group>
            <Button type="submit" className="mt-3">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
