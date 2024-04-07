import React, { useEffect } from "react";
import "../../styles/home.css";
import "../../styles/button.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Button,
  Practice,
  clients,
  Slider,
  Expertise,
  Contact,
} from "./importesFiles";
function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="home" data-aos="fade-up">
        <div className="home__content">
          <h2 className="home__title" data-aos="fade-up">
            <span>We Fight </span>For <br /> Your Right
          </h2>
          <p className="home__para" data-aos="fade-up">
            Another cool free template by the fine folks at <spacer />
            <a href="home" className="link__para">
              Colorlib.
            </a>
          </p>
          <Button value="Free Consultation" />
        </div>
      </div>
      <Practice />
      <div className="review__section">
        <div className="container">
          <h1 data-aos="fade-up">
            <span>Happy</span> Clients
          </h1>
          <div className="cardat" data-aos="fade-up">
            <div className="container">
              <div className="row">
                <div className="slider-container">
                  <Slider {...settings}>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      {clients.slice(0, 1)}
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      {clients.slice(1, 2)}
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      {clients.slice(2, 3)}
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Expertise />
      <Contact />
    </>
  );
}

export default Home;
