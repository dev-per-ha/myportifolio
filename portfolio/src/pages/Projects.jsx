import React from 'react';
import './Projects.css';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'DevPer Hotel ',
      description: "A full-stack Hotel Management System with user and admin roles, secure authentication, room booking with simulated payment, and admin dashboards to manage bookings, customers, and rooms. Built using MERN stack (MongoDB, Express, React, Node.js).",
      image: '/hotel.png',
      link: 'https://devperhotel.onrender.com',
    },
    {
      title: 'DevPer Hospital Appointment',
      description: 'A full-stack Doctor Appointment Booking System with user authentication, doctor approval, appointment scheduling, and MongoDB backend.',
      image: '/doctor.png',
      link: 'https://devperhospital.onrender.com',
    },
    {
      title: 'Full Stack To-Do App',
      description: 'A clean full-stack To-Do List application with user authentication, project categories, task management, and progress tracking using React, Node.js, Express, and MongoDB.',
      image: '/todo.png',
      link: 'https://full-stack-to-do-frontend.onrender.com',
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div
            className="project-card-wrapper"
            style={{ animationDelay: `${index * 0.2}s` }}
            key={index}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
