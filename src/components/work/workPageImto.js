import "./workPageIntoStyle.css";
import React from "react";
import ProjectCard from "../project/projectCard";
import ProjectCardData from "../project/projectCardData";
const WorkPageInto = () => {
  return (
    <div className="work-page-into-section">
      <div className="work-page-into-container">
        <div className="work-page-into-into">
          <p>our work</p>
          <h2>full stack tech solutions</h2>
          <p>
            We can help with a wide range of technology applications, including
            digital strategy and technology consulting, UX/UI research and
            design, hardware design and manufacturing, software development, web
            hosting and management, and ongoing support and maintenance.
          </p>
          <p>Here's some of the projects we're most proud of.</p>
        </div>
        <div className="work-page-card-container">
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

export default WorkPageInto;
