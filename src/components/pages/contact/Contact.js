import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Logo from "../../images/LogoFinal.png";

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
    <div className="contact-wrapper">
      <div className="contact-info">

             
      <div className="logo-and-contact">
        <ul>
          <li>JD Moody Construction</li>
          <li>P.O. Box 13745</li>
          <li>San Luis Obispo, CA, 93406</li>
          <li>LIC # 1060355</li>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:josh@jdmoodyconstruction.com">
              Josh@jdmoodyconstruction.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong> <a href="tel:2144995730">(214) 499-5730</a>
          </li>
        </ul>
        <div className="CTA-and-buttons">
        <h4 id="CTA-1">
          Are you ready for a high quality and professional experience? Give us
          a call, send an email, or use the provided form, we look forward to
          sharing our expertise!
        </h4>
        <br/>
        <ul className="CTA-container" id="CTA-1">
          <li>
            <a href="tel:2144995730">
              {" "}
              <strong>
                CALL NOW <i class="fa-solid fa-phone"></i>
              </strong>
            </a>
          </li>
          <li>
            <a href="mailto:josh@jdmoodyconstruction.com">
              <strong>
                EMAIL <i class="fa-solid fa-envelope"></i>
              </strong>
            </a>
          </li>
        </ul>
        </div>
        </div>
        <br />

        <img src={Logo} className="footer-logo" alt="ok"/>


      </div>
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="from_name"
              required
              placeholder="Provide your name here"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="from_email"
              required
              placeholder="Provide your email here"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="8"
              required
              placeholder="Enter your message here"
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
