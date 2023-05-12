import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_nyq5kvd',
            'template_dm4d5dj',
            form.current,
            'ZxeUxUjMlwIvCK1QE'
        );
        e.target.reset();
    };
    return (
        <section id="contact">
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>Moinuddinasad@gmail.com</h5>
                        <a
                            href="mailto:moinuddinasad@gmail.com"
                            target="_blank"
                        >
                            Send a Message
                        </a>
                    </article>
                    <article className="contact__option">
                        <AiOutlineLinkedin className="contact__option-icon" />
                        <h4>LinkedIn</h4>
                        <h5>Asad Moinuddin</h5>
                        <a
                            href="https://www.linkedin.com/in/asad-moinuddin-65b142204/"
                            target="_blank"
                        >
                            Connect with me on LinkedIn
                        </a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>+91 7032944704</h5>
                        <a
                            href="https://api.whatsapp.com/send?phone=7032944704"
                            target="_blank"
                        >
                            Send a Message
                        </a>
                    </article>
                </div>
                {/*END OF OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        rows="7"
                    ></textarea>
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
