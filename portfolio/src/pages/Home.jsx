import React from 'react';
import './Home.css';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { FaGithub, FaPhoneAlt, FaTelegramPlane } from 'react-icons/fa';

const Home = () => {
  return (
    <>
    <section className="home">
          <div className="intro">
            <h1>Hi, I'm <span>Dawit</span></h1>
            <h2>Full Stack Web Developer</h2>
            <p>I build responsive, clean, and interactive websites using modern web technologies.</p>
            <a href="/Final_resume.pdf" download className="btn">Download Resume</a>
            <div className="contact-icons">
            <a href=" https://github.com/dev-per-ha" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="tel:+251991450499">
              <FaPhoneAlt />
            </a>
            <a href="https://t.me/Devper17" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane />
            </a>
          </div>

          </div>
       <div className="profile-image-wrapper">
          <div className="circle-bg"></div>
          <img src='/profile.JPG' alt="Dawit" />
        </div>

          
    </section>
    <About/>
    <Projects/>
    <Contact/>
    </>
  );
};

export default Home;
