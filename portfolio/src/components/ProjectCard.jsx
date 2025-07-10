import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="project-card">
      <div className="project-img-container">
        <img src={image} alt={title} className="project-img" />
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
