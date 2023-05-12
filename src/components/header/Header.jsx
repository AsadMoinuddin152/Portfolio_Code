import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/my_pic_1.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hey I'm</h5>
                <h1>Asad Moinuddin</h1>
                <h5 className="text-light">Full Stack Developer</h5>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img className="me_img" src={ME} alt="" />
                </div>
                <a href="#contact" className="scroll__down">
                    Scroll Down
                </a>
            </div>
        </header>
    );
};

export default Header;
