import "./AboutStyle.css";
import React from "react";
import AboutHeroImg from "../components/about/aboutHeroImg";

const About = () => {
  return (
    <div className="about">
      <div className="about-hero-img">
        <AboutHeroImg></AboutHeroImg>
      </div>
    </div>
  );
};

export default About;
