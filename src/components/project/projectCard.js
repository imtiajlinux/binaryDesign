import "./projectCardStyle.css";
import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ photo, title, text }) => {
  return (
    <div className="project-card" data-aos="fade-up">
      <img src={photo} alt="p" className="project-photo" />
      <h2 className="project-title">{title}</h2>
      <h4 className="project-text">{text}</h4>
      <Link to="/work">
        {" "}
        <h2>Read more</h2>
      </Link>
    </div>
  );
};

export default ProjectCard;
