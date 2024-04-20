import React from "react";
import bg from "../../assets/imgs/Zakharova-Front-portfolio-3.png";

import { IoIosMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { PiTelegramLogoLight } from "react-icons/pi";
import "./intro.scss";

export const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <div className="portrait-wrap">
          <img src={bg} alt="Profile" className="bg" />
        </div>
        <div className="introInfo">
          <h6>
            <span className="section-header">Tetiana Zakharova</span>
          </h6>
          <span className="introText">
            Hi! I'm Tanya <br />
            <span className="introName">Frontend Developer</span>
          </span>
          <p className="introPara">
            With 4 years of hands-on experience in JavaScript and React, I bring
            a strong track record of efficiently delivering high-quality code.
          </p>
          <div className="btn-wrap">
            <a
              className="download-btn"
              href="https://www.canva.com/design/DAFu6lX__3g/OmoVhtHf98uIDO2caXgMJA/edit?utm_content=DAFu6lX__3g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
            >
              RESUME
            </a>
            <div className="contact-container">
              <a
                className="social-wrap"
                href="https://www.linkedin.com/in/tetiana-zakharova-8639b459/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={20} className="contact-icon" />
              </a>
              <a
                className="social-wrap mail"
                href="mailto:kazakova.tanya@gmail.com"
              >
                <IoIosMail className="contact-icon " size={20} />
              </a>
              <a
                className="social-wrap telegram"
                href="http://t.me/TetyanaZakharova"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PiTelegramLogoLight size={20} className="contact-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
