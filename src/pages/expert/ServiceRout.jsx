import React, { Component } from "react";
import "../../styles/expertise.css";
import expert from "./expert";
import Contact from "../../componentes/contact/Contact";
import Expertise from "../../componentes/Expertise/Expertise";
class ServRout extends Component {
  constructor() {
    super();
    this.state = {
      expert: expert,
    };
  }
  render() {
    return (
      <>
        
        <Expertise />
        <Contact />
      </>
    );
  }
}

export default ServRout;
