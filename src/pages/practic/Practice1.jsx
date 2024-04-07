import React, { useEffect } from "react";
import "../../styles/practiceRout.css";
import { exrerts } from "./functition";
import Contact from "../../componentes/contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

function Practice1() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="practiceRout__section" data-aos="fade-down">
        <h1 data-aos="fade-down">Practice Areas</h1>
        <div className="container sec">
          <div className="row">
            <h2 data-aos="fade-down">
              <span>My</span> Expertise
            </h2>
            <div
              className="col-lg-3 col-md-6 col-sm-12 mt-5"
              data-aos="fade-down"
            >
              {exrerts.slice(0, 1)}
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12 mt-5"
              data-aos="fade-down"
            >
              {exrerts.slice(1, 2)}
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12 mt-5"
              data-aos="fade-down"
            >
              {exrerts.slice(2, 3)}
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12 mt-5 "
              data-aos="fade-down"
            >
              {exrerts.slice(3, 4)}
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}

export default Practice1;
