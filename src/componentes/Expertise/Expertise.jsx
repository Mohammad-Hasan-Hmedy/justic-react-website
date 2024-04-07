import React, { useEffect } from "react";
import "../../styles/expertise.css";
import { exrerts } from "./functition";
import AOS from "aos";
import "aos/dist/aos.css";

function Expertise() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="main3__expert" data-aos="fade-up">
        <div className="experto">
          <div className="container">
            <h1 data-aos="fade-up">
              Our <span>Expertise</span>
            </h1>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                {exrerts.slice(0, 1)}
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                {exrerts.slice(1, 2)}
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                {exrerts.slice(2, 3)}
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                {exrerts.slice(3, 4)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Expertise;
