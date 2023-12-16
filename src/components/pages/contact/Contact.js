import React, { useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "./Contact.css";

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
    <Container className="contact-wrapper justify-content-center">
      <Row className="align-items-center">
        <Col md={6}>
          <p>
            Ready for a high-quality and professional experience? Give us a
            call, send an email, or use the provided form. We are thrilled to
            begin working with you!
          </p>
          <Row>
            <Button>Call Now</Button>
          </Row>
          <Row>
            <Button>Email</Button>
          </Row>
        </Col>
        <Col md={6} className="contact-form">
          <h2>Send Us a Message</h2>
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
            <Button type="submit">Send Message</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
