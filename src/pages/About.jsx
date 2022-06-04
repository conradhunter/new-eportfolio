import React from "react";
import { Link } from "react-router-dom";
import personalImg from "../assets/my-picture.png";
import "./pages.css";
import logo from "../assets/trans-words.png";

const About = () => {
  return (
    <div id="about__container">
      <div id="about__intro--container">
        <div id="img__container">
          <figure>
            <img src={personalImg} id="about__img" alt="" />
          </figure>
        </div>
        <div id="about__info--container">
          <h3 id="about__heading">
            Hi, I'm <span className="textColor__blue">Conrad</span>. It's nice
            to meet you!
            <span className="wave">👋 </span>
          </h3>
          <p id="about__para">
            I am a <span className="textColor__blue">Frontend Developer</span>{" "}
            with a passion for building{" "}
            <span className="textColor__blue">User friendly Interfaces</span>{" "}
            which create a positive
            <span className="textColor__blue"> User Experience</span>. If you
            feel I would be an asset to your company please don't hesitate to{" "}
            <span className="textColor__blue">
              <Link id="contact__link" to="/contact">
                contact me!
              </Link>
            </span>
          </p>
        </div>
      </div>
      <div id="about__logo">
        <figure>
          <img src={logo} id="about__logo" alt="" />
        </figure>
      </div>
    </div>
  );
};

export default About;
