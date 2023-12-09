import React from "react";
import "./Footer.css";
import Logo from "./images/LogoFinal.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-logo">
          <img src={Logo} alt="footer logo" />
        </div>
        <div className="footer-contact-info">
          <p>JD Moody Construction</p>
          <p>P.O. Box: 13745</p>
          <p>San Luis Obispo</p>
          <p>LIC # 1060355</p>
        </div>
        <div className="footer-contact-info-2">
          <p>email: josh@jdmoodyconstruction.com</p>
          <p>phone: (214) 499-5730</p>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;
