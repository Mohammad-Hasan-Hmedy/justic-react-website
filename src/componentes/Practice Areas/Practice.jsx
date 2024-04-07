import React, { Component, useEffect } from "react";
import "../../styles/Practice.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Services,
  Counters,
  info,
  info1,
  Button,
  mapComponents,
} from "./components";

function Practice() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="main__section" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-12 mt-5 text__section">
            <h1 data-aos="fade-up">
              Our <span>Practice Areas</span>
            </h1>
            <p data-aos="fade-up">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in. Separated they live in Bookmarksgrove right at the
              coast of the Semantics, a large language ocean.
            </p>
            <Button value="See More" />
          </div>
          <div className="col-lg-5 serv__section col-md-12">
            {mapComponents(info, Services)}
          </div>
        </div>
        <div className="counter">
          <h1 className="year" data-aos="fade-up">
            <span>50 Years </span>of Experience in Various Cases
          </h1>
          {/* تحقق من حجم الشاشة وعرض العناصر بشكل متجاوب */}
          <div className="counter__container">
            {info1.map((item, index) => (
              <div key={index} className="counter__item">
                <Counters {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Practice;
