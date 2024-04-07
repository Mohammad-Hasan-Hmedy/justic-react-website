import React, { useEffect } from "react";
import "../../styles/srvices.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Services(props) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="service__content">
        <div className="container">
          <div className="start__sec d-flex " data-aos="fade-up">
            {props.icon}
            <h2 data-aos="fade-up">{props.servicTitle}</h2>
          </div>
          <p data-aos="fade-up">{props.servicParagraph}</p>
        </div>
      </div>
    </>
  );
}

export default Services;
