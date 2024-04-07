import React, { Component } from "react";

class FooterLabor extends Component {
  render() {
    return (
      <ul className="menu__footer">
        <li className="li__item">
          <a href="home" className="link__active">
            {this.props.itemActive}
          </a>
        </li>
        <li className="li__item">
          <a href="home" className="link__item">
            {this.props.item}
          </a>
        </li>
      </ul>
    );
  }
}

export default FooterLabor;
