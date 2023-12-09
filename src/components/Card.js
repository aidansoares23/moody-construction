import React from 'react';
import './Card.css'; 
import first from "./images/imresizer-1701969448456.jpg"

const Card = () => {
  return (
    <div className="card">
      <div className="image-container">
        <img
          className="card-image"
          src={first}
          alt="Card"
        />
      </div>
      <div className="card-content">
        <h2>Interior Services</h2>
        <p>Short description goes here...</p>
      </div>
    </div>
  );
};

export default Card;
