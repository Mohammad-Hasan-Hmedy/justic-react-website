import React, { Component } from "react";
import "../../styles/attorneys.css";
import dats from "./dats";
import Employer from "./Employer";
import Contact from "../../componentes/contact/Contact";
import Footer from "../../componentes/footer/Footer";
class Attorneys extends Component {
  render() {
    return (
      <>
        <div className="main__section">
          <h1>
            Our Expert <span>Attorneys</span>
          </h1>
        </div>
        <div className="employer__card">
          {dats.map((emp) => (
            <Employer
              key={emp.key}
              img={emp.img}
              name={emp.name}
              job={emp.job}
              desc={emp.desc}
            />
          ))}
        </div>
        <Contact />
        <Footer />
      </>
    );
  }
}

export default Attorneys;
