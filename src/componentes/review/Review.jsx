import React, { Component } from "react";
import "../../styles/review.css";
class Review extends Component {
  render() {
    return (
      <>
        <div className="review__card">
          <p>{this.props.para}</p>
          <img src={this.props.img} alt="Mick" />
          <h5>{this.props.name}</h5>
          <h4>{this.props.job}</h4>
        </div>
      </>
    );
  }
}

export default Review;
