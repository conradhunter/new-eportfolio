import React from "react";
import "./pages.css";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javaScript from "../assets/javascript.png";
import react from "../assets/react.png";
import fireBase from "../assets/firebase.png";
import creativeCloud from "../assets/creativecloud.png";
import restAPI from "../assets/restAPI.png";
import tailWind from "../assets/tailwind.png";

const Languages = () => {
  return (
    <div id="languages__container">
      <h1 id="languages__heading">
        This is my <span className="textColor__blue">technology stack!</span>
      </h1>
      <p id="languages__para">
        I am always working towards expanding my technology stack with the
        addition of new languages, libraries and frameworks.
      </p>
      <div className="my-languages">
        <figure className="language__name--hover">
          <img src={html} className="language-img" alt="" />
          <h3 className="language__name">HTML</h3>
        </figure>
        <figure className="language__name--hover">
          <img src={css} className="language-img" alt="" />
          <h3 className="language__name">CSS</h3>
        </figure>
        <figure className="language__name--hover">
          <img src={tailWind} className="language-img" alt="" />
          <h3 className="language__name">Tailwind</h3>
        </figure>
        <figure className="language__name--hover">
          <img src={javaScript} className="language-img" alt="" />
          <h3 className="language__name">JavaScript</h3>
        </figure>
        <figure className="language__name--hover">
          <img src={react} className="language-img" alt="" />
          <h3 className="language__name">React</h3>
        </figure>
        <figure className="language__name--hover">
          <img src={restAPI} className="language-img" alt="" />
          <h3 className="language__name">REST API</h3>
        </figure>
        <figure className="language__name--hover">
          <img src={fireBase} className="language-img" alt="" />
          <h3 className="language__name">Firebase</h3>
        </figure>
        <figure className="language__name--hover">
          <img src={creativeCloud} className="language-img" alt="" />
          <h3 className="language__name">Creative Cloud</h3>
        </figure>
      </div>
    </div>
  );
};

export default Languages;
