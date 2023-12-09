import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./images/LogoFinal.png";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleLinkClick = () => {
    this.setState({ clicked: false }); // Close the mobile menu when a link is clicked
  };

  render() {
    return (
      <>
        <nav>
          <Link to="/">
            <img src={Logo} className="logo" alt="Logo" />
          </Link>

          <div>
            <ul id="navbar" className={this.state.clicked ? "active" : ""}>
              <li>
                <NavLink
                  to="/"
                  exact
                  activeClassName="active"
                  onClick={this.handleLinkClick}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  activeClassName="active"
                  onClick={this.handleLinkClick}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  activeClassName="active"
                  onClick={this.handleLinkClick}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  activeClassName="active"
                  onClick={this.handleLinkClick}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
