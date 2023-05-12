import React from 'react';
import './testimonials.css';
import VhackImg from '../../assets/VHack Certificate.jpg';
import EthicalWorkShop from '../../assets/WORKSHOP VOLUNTEERING.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        name: 'V-Hack 2023',
        description:
            'Participated in the V-Hack 2023. Varsity Hackathon 2023 is a student-led international hackathon for local and international undergraduates to compete by formulating the best solutions to solve real-world issues.',
        image: VhackImg,
    },

    {
        name: 'Volunteer ETHICAL HACKING',
        description: `Asad Moinuddin volunteered for a one-day workshop on Ethical Hacking conducted by the Department of Computer Science and Engineering at Lords Institute of Engineering and Technology on 19th April, 2022. His active participation demonstrated his passion and eagerness to learn.`,
        image: EthicalWorkShop,
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>A Glimpse of My</h5>
            <h2>Academic Achievements</h2>
            <Swiper
                className="container achievements__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                loop={true}
                pagination={{
                    clickable: true,
                }}
            >
                {data.map(({ name, description, image }, index) => {
                    return (
                        <SwiperSlide key={index} className="achievement">
                            <div className="achievement__image">
                                <img src={image} alt="" />
                            </div>
                            <h5 className="achievement__name">{name}</h5>
                            <small className="achievement__description">
                                {description}
                            </small>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Testimonials;
