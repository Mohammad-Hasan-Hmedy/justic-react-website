import React, { Component } from "react";
import "../../styles/button.css";
class Button extends Component {
  render() {
    return (
      <div className="btn">
        <button className="btn__style">{this.props.value}</button>
      </div>
    );
  }
}

export default Button;
