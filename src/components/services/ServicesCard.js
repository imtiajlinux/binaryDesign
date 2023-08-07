import "./ServicesCardStyle.css";
import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({ icon, titel, text }) => {
  return (
    <div className="servicesCard" data-aos="fade-up">
      <icon className="icon">{icon}</icon>
      <h1 className="title">{titel}</h1>
      <h3 className="text">{text}</h3>
      <Link to="/work">
        <h2> Read More</h2>
      </Link>
    </div>
  );
};

export default ServicesCard;
