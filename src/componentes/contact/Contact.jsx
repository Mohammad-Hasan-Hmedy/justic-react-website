import React, { useEffect } from "react";
import "../../styles/contact.css";
import { Container } from "react-bootstrap";
import Button from "../button/Button";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="main__contact" data-aos="fade-up">
      <Container className="content">
        <div className="text">
          <h3 data-aos="fade-up">
            Let's get started. Call us Now for
            <br /> a Free Consultation
          </h3>
          <Button value="Free Consultation" />
        </div>
      </Container>
    </div>
  );
}

export default Contact;
