import React, { useState, useEffect } from "react";
import { BiPlus, BiMinus, BiCheck } from "react-icons/bi";
import "../../styles/about.css";
import Contact from "../../componentes/contact/Contact";
import Attorneys1 from "./Attorneys1";
import Footer from "../../componentes/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const paraAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const questions = [
    {
      question: "HOW TO DOWNLOAD AND REGISTER",
      answer:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      question: "HOW TO DOWNLOAD AND REGISTER",
      answer:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      question: "HOW TO DOWNLOAD AND REGISTER",
      answer:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      question: "HOW TO DOWNLOAD AND REGISTER",
      answer:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
  ];

  return (
    <>
      <div className="main1__section" data-aos="fade-down">
        <h1 data-aos="fade-down">
          About <span>Company</span>
        </h1>
      </div>
      <div className="section__content">
        <div className="description__section" data-aos="fade-down">
          <h1 data-aos="fade-down">
            Why <span>Choose Us?</span>
          </h1>
          <p data-aos="fade-down">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <h5 data-aos="fade-down">
            <BiCheck className="icone__check" /> Far far away, behind the word
          </h5>
          <h5 data-aos="fade-down">
            <BiCheck className="icone__check" /> Far from the countries Vokalia
          </h5>
          <h5 data-aos="fade-down">
            <BiCheck className="icone__check" /> Separated they live in
            Bookmarksgrove
          </h5>
        </div>
        <div className="question__answer" data-aos="fade-down">
          {questions.map((item, index) => (
            <div key={index}>
              <h4
                onClick={() => paraAccordion(index)}
                className={
                  index === activeIndex ? "question active" : "question"
                }
              >
                {index === activeIndex ? (
                  <BiMinus className="qustion__icon" />
                ) : (
                  <BiPlus className="qustion__icon" />
                )}{" "}
                {item.question}
              </h4>
              <div className="para">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Attorneys1 />
      <Contact />
    </>
  );
}

export default About;
