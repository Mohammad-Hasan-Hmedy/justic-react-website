import React, { Component } from "react";
import "../../styles/attorneys1.css";
import dats1 from "./dats1";
import Employer1 from "./Employer1";
class Attorneys1 extends Component {
  render() {
    return (
      <>
        <div className="main2__section">
          <h1 className="team">
            Our <span>Team</span>
          </h1>
        </div>
        <div className="employer__card">
          {dats1.map((emp) => (
            <Employer1
              key={emp.key}
              img={emp.img}
              name={emp.name}
              job={emp.job}
              desc={emp.desc}
            />
          ))}
        </div>

      </>
    );
  }
}

export default Attorneys1;
