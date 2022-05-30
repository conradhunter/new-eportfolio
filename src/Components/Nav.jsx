import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./components.css";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import {faFilePdf} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div id="nav">
            <ul id="nav__bar--links">
                <li>
                    <Link className='nav__bar--link' to="/about">About</Link>
                </li>
                <li>
               <Link className='nav__bar--link' to="/languages">Languages</Link>
                </li>
                <li>
                    <Link className='nav__bar--link' to="/projects">Projects</Link>
                </li>
                <li>
                    <Link className='nav__bar--link' to="/contact">Contact</Link>
                </li>
            </ul>
            <div id="nav__social--icons">
                <ul id='nav__social--links'>
                    <li>
                        <a href="">
                            <FontAwesomeIcon className='social__icon' icon={faLinkedinIn} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/conradhunter">
                            <FontAwesomeIcon className='social__icon' icon={faGithub} />
                        </a>
                    </li>
                    <li>
                        <a href="assets/Conrad Hunter Resume.pdf" target='_blank'>
                            <FontAwesomeIcon className='social__icon' icon={faFilePdf} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;
