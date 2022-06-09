import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./components.css";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import resume from "../assets/conrad-hunter-resume.pdf";
import {
  faAddressCard,
  faFileCode,
  faDesktop,
  faAt,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <div id="nav">
      <ul id="nav__bar--links">
        <li>
          <Link className="nav__bar--link link__hover--effect" to="/">
            About
          </Link>
        </li>
        <li>
          <Link className="nav__bar--link link__hover--effect" to="/languages">
            Languages
          </Link>
        </li>
        <li>
          <Link className="nav__bar--link link__hover--effect" to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="nav__bar--link link__hover--effect" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <div id="nav__social--icons">
        <ul id="nav__social--links">
          <li>
            <a
              href="https://www.linkedin.com/in/conrad-hunter-906a57226/"
              target="_blank"
            >
              <FontAwesomeIcon className="social__icon" icon={faLinkedinIn} />
            </a>
          </li>
          <li>
            <a href="https://github.com/conradhunter" target="_blank">
              <FontAwesomeIcon className="social__icon" icon={faGithub} />
            </a>
          </li>
          <li>
            <a href={resume} target="_blank">
              <FontAwesomeIcon className="social__icon" icon={faFilePdf} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
