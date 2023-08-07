import "./projectStyle.css";
import React from "react";
import ProjectCard from "./projectCard";
import ProjectCardData from "./projectCardData";

const Project = () => {
  return (
    <div className=" project-section ">
      <div className="project-container">
        <div className="project-into">
          <h3>our latest work</h3>
          <h2>Recent projects</h2>
        </div>
        <div className="project-card-container">
          {ProjectCardData.map((val, int) => {
            return (
              <ProjectCard
                key={int}
                photo={val.photo}
                title={val.titel}
                text={val.text}
              ></ProjectCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
