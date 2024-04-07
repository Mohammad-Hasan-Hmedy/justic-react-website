import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import "../../styles/navbar.css";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
    this.navToggle = this.navToggle.bind(this);
  }

  navToggle() {
    this.setState((prevState) => ({
      active: !prevState.active,
    }));
  }
  render() {
    const navClass = this.state.active ? "nav__menu nav__active" : "nav__menu";
    return (
      <nav className="nav">
        <div className="nav__brand">Justic</div>
        <ul className={navClass}>
          <li className="nav__item">
            <Link to="/" className="nav__link" onClick={this.navToggle}>
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/practic" className="nav__link" onClick={this.navToggle}>
              Practice Areas
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/serviceRout"
              className="nav__link"
              onClick={this.navToggle}
            >
              Services
            </Link>
          </li>

          <li className="nav__item">
            <Link to="/about" className="nav__link" onClick={this.navToggle}>
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/contactus"
              className="nav__link"
              onClick={this.navToggle}
            >
              Contact Us
            </Link>
          </li>
          <div className="nav__close">
            <AiOutlineClose onClick={this.navToggle} />
          </div>
        </ul>
        <div className="nav__icon">
          <BiMenu className="icon" onClick={this.navToggle} />
        </div>
      </nav>
    );
  }
}

export default Navbar;
