import React from 'react';

const Contact = () => {
    return (
        <div id="contact__container">
            <h1 id="contact__heading">Get in touch with me!</h1>
            <div className="labelInput__container">
                <label htmlFor="">Name</label>
                <input required type="text" />
            </div>
            <div className="labelInput__container">
                <label htmlFor="">Email</label>
                <input required type="email" />
            </div>
            <div className="labelInput__container">
                <label htmlFor="">Phone Number</label>
                <input type="text" />
            </div>
            <div className="labelInput__container">
                <label htmlFor="">Message Subject</label>
                <input type="text" />
            </div>
            <div className="labelInput__container">
                <label htmlFor="">Message</label>
                <textarea required name="" id="" cols="30" rows="10"></textarea>
            </div>
        </div>
    );
}

export default Contact;
