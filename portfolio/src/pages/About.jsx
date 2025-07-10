import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src='/about.jpg' alt="About" />
        </div>

        <div className="about-text">
          <p>
             Hello, I’m a junior full-stack web developer who is passionate about building meaningful applications. 
             I’ve completed several full-stack projects, and I’m now eager to work on real-world projects that solve real problems.         
         </p>

          <h3 className="skills-title">Skills</h3>
          <div className="skills-list">
            <span style={{ animationDelay: "0.1s" }}>HTML</span>
            <span style={{ animationDelay: "0.2s" }}>CSS</span>
            <span style={{ animationDelay: "0.3s" }}>JavaScript</span>
            <span style={{ animationDelay: "0.4s" }}>React</span>
            <span style={{ animationDelay: "0.5s" }}>Bootstrap</span>
            <span style={{ animationDelay: "0.6s" }}>Git & GitHub</span>
            <span style={{ animationDelay: "0.7s" }}>Responsive Design</span>
            <span style={{ animationDelay: "0.8s" }}>REST APIs</span>
            <span style={{ animationDelay: "0.9s" }}>MongoDB & MySQL</span>
            <span style={{ animationDelay: "0.10s" }}>Node.js</span>
            <span style={{ animationDelay: "0.11s" }}>Express.js</span>
            <span style={{ animationDelay: "0.12s" }}>Python</span>
            <span style={{ animationDelay: "0.13s" }}>Django</span>
            <span style={{ animationDelay: "0.14s" }}>Python</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
