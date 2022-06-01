import React from "react";
import undraw from "../assets/undraw-contact.svg";

const Contact = () => {
  return (
    <div id="contact__container">
      <h1 id="contact__heading">
        Get in <span className="textColor__blue">contact</span> with me!
      </h1>
      <div id="form__container">
        <div className="labelInput__container">
          <label className="form__label" htmlFor="">
            Name
          </label>
          <input required type="text" />
        </div>
        <div className="labelInput__container">
          <label className="form__label" htmlFor="">
            Email
          </label>
          <input required type="email" />
        </div>
        <div className="labelInput__container">
          <label className="form__label" htmlFor="">
            Phone Number
          </label>
          <input type="text" />
        </div>
        <div className="labelInput__container">
          <label className="form__label" htmlFor="">
            Message Subject
          </label>
          <input type="text" />
        </div>
        <div className="labelInput__container">
          <label className="form__label" htmlFor="">
            Message
          </label>
          <textarea
            required
            name="message"
            id="contact__textArea"
            cols="20"
            rows="10"
          ></textarea>
        </div>
      </div>
      <div id="contact__buttons">
        <button id="submit__contactForm" className="btn">
          Send it my way!
        </button>
      </div>
      <div id="contact__undraw">
          <figure>
              <img id="undraw__contactImage" src={undraw} alt="" />
          </figure>
      </div>
    </div>
  );
};

export default Contact;
