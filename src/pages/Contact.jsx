import React from "react";

const Contact = () => {
  return (
    <div id="contact__container">
      <h1 id="contact__heading">
        Get in <span className="textColor__blue">contact</span> with me!
      </h1>
      <div>
        <form action="https://formsubmit.co/a9c2d33c168b5b4093999096a5d2d895" method="post" id="form__container">
          <div id="form__container">
            <div className="labelInput__container">
              <label className="form__label"  htmlFor="name">
                Name
              </label>
              <input required type="text" name='name' />
            </div>
            <div className="labelInput__container">
              <label className="form__label"  htmlFor="email">
                Email
              </label>
              <input required type="email" inputMode="email" name='email' />
            </div>
            <div className="labelInput__container">
              <label className="form__label"  htmlFor="number">
                Phone Number
              </label>
              <input type="text" inputMode="tel" name='phoneNumber' />
            </div>
            <div className="labelInput__container">
              <label className="form__label"  htmlFor="messageSubject">
                Message Subject
              </label>
              <input type="text" name='messageSubject' />
            </div>
            <div className="labelInput__container">
              <label className="form__label" htmlFor="message">
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
            <button id="submit__contactForm" type="submit" className="btn">
              Send it my way!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
