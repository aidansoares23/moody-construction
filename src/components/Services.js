import React, { useState } from "react";
import "./Services.css"; // Import your CSS file here

function Services() {
  const [dropdowns, setDropdowns] = useState(new Array(3).fill(false)); // Adjust the array length as needed

  const toggleDropdown = (index) => {
    const updatedDropdowns = [...dropdowns];
    updatedDropdowns[index] = !updatedDropdowns[index];
    setDropdowns(updatedDropdowns);
  };

  const gridItems = [
    {
      title: "Property Services ",
      list: ["Property Mainteance", "Fence Installation", "Accessory Dwelling Units (ADU)"],
    },
    {
      title: "Interior Services",
      list: ["Flooring and Carpentry", "Kitchen and Bath Remodeling", "Drywall and Painting"],
    },
    {
      title: "Other Services",
      list: ["Deck Construction", "Client Tenant Improvement (CTI)", "Rough Framing"],

    }
    // Add more items as needed
  ];

  return (
    <div className="grid-container">
      {gridItems.map((item, index) => (
        <div className={`grid-item ${item.blur ? "blur-background" : ""}`} key={index}>
          <h3 className="grid-heading" onClick={() => toggleDropdown(index)}>
            {item.title}
            <i className={`fas ${dropdowns[index] ? "fa-angle-up" : "fa-angle-down"}`}></i>
          </h3>
          <ul className={`dropdown-list ${dropdowns[index] ? "dropdown-active" : ""}`}>
            {item.list.map((listItem, subIndex) => (
              <li key={subIndex}>{listItem}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Services;
