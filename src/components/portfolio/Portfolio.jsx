import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
    {
        id: 1,
        title: 'Expanding Cards',
        image: IMG1,
        github: 'https://github.com/AsadMoinuddin152/Exploring-Cards',
        demo: 'https://asadmoinuddin152.github.io/Exploring-Cards/',
    },
    {
        id: 2,
        title: 'Progress-steps',
        image: IMG2,
        github: 'https://github.com/AsadMoinuddin152/Progress-steps',
        demo: 'https://asadmoinuddin152.github.io/Progress-steps/',
    },
    {
        id: 3,
        title: 'Scrolling-page',
        image: IMG3,
        github: 'https://github.com/AsadMoinuddin152/Scrolling-page',
        demo: 'https://asadmoinuddin152.github.io/Scrolling-page/',
    },
    {
        id: 4,
        title: 'Split-landing-page',
        image: IMG4,
        github: 'https://github.com/AsadMoinuddin152/07-Split-landing-page',
        demo: 'https://asadmoinuddin152.github.io/07-Split-landing-page/',
    },
    {
        id: 5,
        title: 'Form-Wave-animation',
        image: IMG5,
        github: 'https://github.com/AsadMoinuddin152/08-Form-Wave-animation',
        demo: 'https://asadmoinuddin152.github.io/08-Form-Wave-animation/',
    },
    {
        id: 6,
        title: 'Quote-Generator',
        image: IMG6,
        github: 'https://github.com/AsadMoinuddin152/10-Quote-Generator',
        demo: 'https://asadmoinuddin152.github.io/10-Quote-Generator/',
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Projects</h2>

            <div className="container portfolio__container">
                {data.map(({ id, title, image, github, demo }) => {
                    return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a
                                    href={github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn"
                                >
                                    Github
                                </a>
                                <a
                                    href={demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
