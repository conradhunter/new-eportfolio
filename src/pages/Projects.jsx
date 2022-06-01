import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink, faComputerMouse } from "@fortawesome/free-solid-svg-icons";
import twitterClone from "../assets/twitter-clone-ss.png";
import wordleClone from '../assets/wordle-clone-ss.png'
import skinGym from '../assets/skin-gym-ss.png';
import calculator from '../assets/calculator-ss.png';
import ePortfolio from '../assets/client-e-port-ss.png';
import agencyApp from '../assets/agency-ss.png';
import { Link } from "react-router-dom";

const Projects = () => {

  return (
    <div id="projects__container">
      <h1 id="projects__heading">
        Here are some of my <span className="textColor__blue">projects!</span>
      </h1>
      <p id="projects__para">
        Here is a collection of some of my favourite projects I have put
        together which showcase my skills and abilities with HTML5, CSS3,
        JavaScript and React. All source code for my projects I have built can
        be found on my GitHub. Link below!
        <br></br>
        <a href="https://github.com/conradhunter" target="_blank">
          <FontAwesomeIcon id="projects__gitHub--icon" icon={faGithub} />
        </a>
      </p>
      <div className="project__wrapper">
        <div className="project__info--container">
          <h2 className="project__title">Wordle Clone</h2>
          <h4 className="project__subTitle">React, JSX, JavaScript, CSS</h4>
          <p className="project__para">
          A clone of the popular puzzle game Wordle. Words are pulled from an API for the player to guess.
          </p>
          <div className="project__icon--links">
            <a href="https://github.com/conradhunter/wordle-clone">
              <FontAwesomeIcon className="project__icon" icon={faGithub} />
            </a>
            <a href="">
              <FontAwesomeIcon className="project__icon" icon={faLink} />
            </a>
          </div>
        </div>
        <div className="project__img--container">
          <figure>
            <img src={wordleClone} id='project__img' alt="" />
          </figure>
        </div>
      </div>
      <div className="project__wrapper--reverse">
        <div className="project__img--container">
          <figure>
            <img src={skinGym} id='project__img' alt="" />
          </figure>
        </div>
        <div className="project__info--container">
          <h2 className="project__title">Skin Gym Sylvania</h2>
          <h4 className="project__subTitle">React, JSX, JavaScript, CSS</h4>
          <p className="project__para">
            Built a responsive, SEO friendly web app for a local skin care clinic.
          </p>
          <div className="project__icon--links">
            <a href="https://github.com/conradhunter/skin-gym-react">
              <FontAwesomeIcon className="project__icon" icon={faGithub} />
            </a>
            <a href="https://skin-gym-sylvania-react.netlify.app">
              <FontAwesomeIcon className="project__icon" icon={faLink} />
            </a>
          </div>
        </div>
      </div>
      <div className="project__wrapper">
        <div className="project__info--container">
          <h2 className="project__title">Twitter Clone</h2>
          <h4 className="project__subTitle">React, JSX, JavaScript, CSS</h4>
          <p className="project__para">
            A clone of the popular social media platform Twitter build with React, JavaScript and CSS best practices.
          </p>
          <div className="project__icon--links">
            <a href="">
              <FontAwesomeIcon className="project__icon" icon={faGithub} />
            </a>
            <a href="">
              <FontAwesomeIcon className="project__icon" icon={faLink} />
            </a>
          </div>
        </div>
        <div className="project__img--container">
          <figure>
            <img src={twitterClone} id='project__img' alt="" />
          </figure>
        </div>
      </div>
      <div className="project__wrapper--reverse">
        <div className="project__img--container">
          <figure>
            <img src={calculator} id='project__img' alt="" />
          </figure>
        </div>
        <div className="project__info--container">
          <h2 className="project__title">Vanilla JavaScript Calculator</h2>
          <h4 className="project__subTitle">JavaScript, CSS, HTML</h4>
          <p className="project__para">
            A fully functioning calculator build using Vanilla JavaScript.
          </p>
          <div className="project__icon--links">
            <a href="https://github.com/conradhunter/JS-Calculator">
              <FontAwesomeIcon className="project__icon" icon={faGithub} />
            </a>
            <a href="https://conradhunter.github.io/JS-Calculator/">
              <FontAwesomeIcon className="project__icon" icon={faLink} />
            </a>
          </div>
        </div>
      </div>
      <div className="project__wrapper">
        <div className="project__info--container">
          <h2 className="project__title">Client E-Portfolio</h2>
          <h4 className="project__subTitle">HTML, CSS</h4>
          <p className="project__para">
            A mock up E-portfolio built for a fictitious client using HTML and CSS best practices.
          </p>
          <div className="project__icon--links">
            <a href="https://github.com/conradhunter/client-e-portfolio">
              <FontAwesomeIcon className="project__icon" icon={faGithub} />
            </a>
            <a href="">
              <FontAwesomeIcon className="project__icon" icon={faLink} />
            </a>
          </div>
        </div>
        <div className="project__img--container">
          <figure>
            <img src={ePortfolio} id='project__img' alt="" />
          </figure>
        </div>
      </div>
      <div className="project__wrapper--reverse">
        <div className="project__img--container">
          <figure>
            <img src={agencyApp} id='project__img' alt="" />
          </figure>
        </div>
        <div className="project__info--container">
          <h2 className="project__title">Agency App</h2>
          <h4 className="project__subTitle">React, JSX, JavaScript, CSS</h4>
          <p className="project__para">
            A freelance marketing and web development agency put together by myself and some friends.
          </p>
          <div className="project__icon--links">
            <a href="https://github.com/conradhunter/agency-app">
              <FontAwesomeIcon className="project__icon" icon={faGithub} />
            </a>
            <a href="">
              <FontAwesomeIcon className="project__icon" icon={faLink} />
            </a>
          </div>
        </div>
      </div>
      <div id="projectsPage__buttons--container">
        <button className="btn">Contact Me</button>
        <button id="scrollToTop" className="btn">
          <FontAwesomeIcon id="scrollToTop__icon" icon={faComputerMouse} />
        </button>
      </div>
    </div>
  );
};

export default Projects;
