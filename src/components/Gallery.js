import React, { useState } from "react";
import one from "./images/IMG_2748.jpg";
import two from "./images/IMG_2749.jpg";
import three from "./images/IMG_2750.jpg";
import four from "./images/IMG_2751.jpg";
import five from "./images/IMG_2752.jpg";
import six from "./images/IMG_2753.jpg";
import seven from "./images/IMG_2754.jpg";
import eight from "./images/IMG_2755.jpg";
import nine from "./images/IMG_3436.jpg";
import "./Gallery.css";

function Gallery() {
  const [showImages, setShowImages] = useState(true);

  const toggleImages = () => {
    setShowImages(!showImages);
  };

  return (
    <>
      <h2 onClick={toggleImages} className="toggle-button">
        Check Out Our Work <i class="fa-solid fa-arrow-down"></i>
      </h2>
      <br />
      <div className={`gallery-grid ${showImages ? "show" : "hide"}`}>
        <img className="gallery-grid-item" id="one" src={one} alt="1" />
        <img className="gallery-grid-item" id="two" src={two} alt="2" />
        <img className="gallery-grid-item" id="three" src={three} alt="3" />
        <img className="gallery-grid-item" id="four" src={four} alt="4" />
        <img className="gallery-grid-item" id="five" src={five} alt="5" />
        <img className="gallery-grid-item" id="six" src={six} alt="6" />
        <img className="gallery-grid-item" id="seven" src={seven} alt="7" />
        <img className="gallery-grid-item" id="eight" src={eight} alt="8" />
        <img className="gallery-grid-item" id="nine" src={nine} alt="9" />
      </div>
    </>
  );
}

export default Gallery;
