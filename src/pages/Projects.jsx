import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import twitterClone from "../assets/twitter-clone-ss.png";
import wordleClone from '../assets/wordle-clone-ss.png'

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
            <img src={wordleClone} id='project__img' alt="" />
          </figure>
        </div>
        <div className="project__info--container">
          <h2 className="project__title">Wordle Clone</h2>
          <h4 className="project__subTitle">React, JSX, JavaScript, CSS</h4>
          <p className="project__para">
            A clone of the popular puzzle game Wordle. Words are pulled from an API for the player to guess.
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
            <img src={wordleClone} id='project__img' alt="" />
          </figure>
        </div>
        <div className="project__info--container">
          <h2 className="project__title">Wordle Clone</h2>
          <h4 className="project__subTitle">React, JSX, JavaScript, CSS</h4>
          <p className="project__para">
            A clone of the popular puzzle game Wordle. Words are pulled from an API for the player to guess.
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
            <img src={wordleClone} id='project__img' alt="" />
          </figure>
        </div>
        <div className="project__info--container">
          <h2 className="project__title">Wordle Clone</h2>
          <h4 className="project__subTitle">React, JSX, JavaScript, CSS</h4>
          <p className="project__para">
            A clone of the popular puzzle game Wordle. Words are pulled from an API for the player to guess.
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
      </div>
    </div>
  );
};

export default Projects;
