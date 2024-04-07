import React, { Component } from "react";
class Employer1 extends Component {
  render() {
    return (
      <div className="card__emp">
        <img src={this.props.img} alt="" />
        <h3 className="name1">{this.props.name}</h3>
        <h5 className="job1">{this.props.job}</h5>
        <p className="desc1">{this.props.desc}</p>
      </div>
    );
  }
}

export default Employer1;
