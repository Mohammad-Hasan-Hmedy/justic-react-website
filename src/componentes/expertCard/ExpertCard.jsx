import React, { Component } from "react";
import "../../styles/expertCard.css";
class ExpertCard extends Component {
  render() {
    return (
      <div className="expert__content">
        {this.props.icon}
        <p>{this.props.para}</p>
      </div>
    );
  }
}

export default ExpertCard;
