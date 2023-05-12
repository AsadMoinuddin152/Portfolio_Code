import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container services__container">
                <article className="services">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Wireframing</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Prototyping</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Mockups</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Responsive Design</p>
                        </li>
                    </ul>
                </article>
                {/*End of UI*/}
                <article className="services">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>HTML</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>CSS</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>JavaScript</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>
                                React <span>(Hooks, Redux)</span>
                            </p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>
                                Node <span>(Express)</span>
                            </p>
                        </li>
                    </ul>
                </article>
                {/*End of Web Development*/}
            </div>
        </section>
    );
};

export default Services;
