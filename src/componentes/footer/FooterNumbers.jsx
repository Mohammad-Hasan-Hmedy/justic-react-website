import React, { Component } from "react";

class FooterNumbers extends Component {
  render() {
    return (
      <ul className="menu__footer">
        <li className="li__item">
          <a href="home" className="link__item">
            {this.props.item}
          </a>
        </li>
      </ul>
    );
  }
}

export default FooterNumbers;
