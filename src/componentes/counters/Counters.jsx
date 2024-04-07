import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "../../styles/counter.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Counters(props) {
  const [counterOn, setCounterOn] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="counters__container">
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <h1 data-aos="fade-up">
          {counterOn && (
            <CountUp
              start={props.start}
              end={props.end}
              duration={props.duration}
              delay={props.delay}
            />
          )}
          {props.end > 4 ? <span>+</span> : <span>K+</span>}
        </h1>
        <h4 className="text1" data-aos="fade-up">
          {props.text}
        </h4>
        <p data-aos="fade-up">{props.paraghraph}</p>
      </ScrollTrigger>
    </div>
  );
}

export default Counters;
