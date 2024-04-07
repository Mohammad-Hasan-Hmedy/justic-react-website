import React, { useEffect } from "react";
import "../../styles/button.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Button(props) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="bt" data-aos="fade-up">
      <button className="btn__style">{props.value}</button>
    </div>
  );
}

export default Button;
