import React, { useEffect } from "react";
import { info, info2, info3, info4, social } from "./dataArray";
import { mapComponents } from "./functions";
import "../../styles/footer.css";
import FooterHome from "./FooterHome";
import FooterService from "./FooterService";
import FooterLabor from "./FooterLabor";
import FooterNumbers from "./FooterNumbers";
import SocialIcons from "./SocialIcons";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const state = {
    info: info,
    info2: info2,
    info3: info3,
    info4: info4,
    social: social,
  };

  return (
    <div className="container__footer" data-aos="fade-up">
      <div className="footer__item">
        <div className="menu__section">
          {mapComponents(state.info, FooterHome)}
        </div>
        <div className="menu__section">
          {mapComponents(state.info2, FooterLabor)}
        </div>
        <div className="menu__section">
          {mapComponents(state.info3, FooterService)}
        </div>
        <div className="menu__section">
          <h4 className="link__active">Contact</h4>
          <p className="para">43 Raymouth Rd. Baltemoer, London 3910</p>
          {mapComponents(state.info4, FooterNumbers)}
          <div className="social__media-links">
            {mapComponents(state.social, SocialIcons)}
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright para">
        Copyright ©2024 All rights reserved | This template is made with by
        <a href="home"> IT-ENG.Mohamad Hasan Hmedy</a>
      </p>
    </div>
  );
}

export default Footer;
