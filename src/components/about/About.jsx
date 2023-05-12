import React from 'react';
import './about.css';
import ME from '../../assets/My_pic2.jpg';
import { FaAward } from 'react-icons/fa';
import { AiTwotoneFolderOpen } from 'react-icons/ai';
import { HiOutlineAcademicCap } from 'react-icons/hi';

const About = () => {
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="about" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>Fresher</small>
                        </article>
                        <article className="about__card">
                            <AiTwotoneFolderOpen className="about__icon" />
                            <h5>Projects</h5>
                            <small>15+ Completed</small>
                        </article>
                        <article className="about__card">
                            <HiOutlineAcademicCap className="about__icon" />
                            <h5>Academics</h5>
                            <small>7.5 GPA</small>
                        </article>
                    </div>
                    <p>
                        I am <strong>Asad Moinuddin</strong>, a motivated web
                        developer pursuing B.E. in Computer Science Engineering
                        from Lords Institute of Engineering and Technology. My
                        expertise lies in the MERN stack, and I specialize in
                        building interactive web applications using HTML, CSS,
                        JavaScript, ReactJS, NodeJS, ExpressJS, and MongoDB. I
                        am a quick learner, detail-oriented, and possess
                        excellent communication and collaboration skills. I am
                        constantly seeking new challenges to enhance my skills
                        and grow as a web developer.
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
