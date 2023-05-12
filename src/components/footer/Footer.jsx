import React from 'react';
import './footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">
                ASAD
            </a>
            <ul className="permalinks">
                <li>
                    <a href="#">HOME</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#testimonials">Achievements</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="footer__socials">
                <a
                    href="https://www.linkedin.com/in/asad-moinuddin-65b142204/"
                    target="_blank"
                >
                    <BsLinkedin />
                </a>
                <a href="https://github.com/AsadMoinuddin152" target="_blank">
                    <FaGithub />
                </a>
                <a
                    href="https://www.instagram.com/asad_moinuddin/"
                    target="_blank"
                >
                    <BsInstagram />
                </a>
            </div>

            <div className="footer__copyright">
                <small>
                    &copy; 2021 <strong>Asad Moinuddin</strong>
                </small>
            </div>
        </footer>
    );
};

export default Footer;
