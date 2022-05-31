import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import wordleClone from "../assets/wordle-clone-ss.png"

const Projects = () => {
  return (
    <div id="projects__container">
      <h1 id="projects__heading">Here are some of my projects!</h1>
      <p id="projects__para">
        Here is a collection of some of my favourite projects I have put
        together which showcase my skills and abilities with HTML5, CSS3,
        JavaScript and React. All source code for my projects I have built
        can be found on my GitHub right here =>{" "}
        <a href="https://github.com/conradhunter" target="_blank">
          <FontAwesomeIcon id="projects__gitHub--icon" icon={faGithub} />
        </a>
      </p>
      <div id="projects__list">
          <ul>
              <li className="project">
                  Twitter Clone
              </li>
              <li className="project">
                  Twitter Clone
              </li>
              <li className="project">
                  Twitter Clone
              </li>
              <li className="project">
                  Twitter Clone
              </li>
              <li className="project">
                  Twitter Clone
              </li>
          </ul>
      </div>
    </div>
  );
};

export default Projects;
