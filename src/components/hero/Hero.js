import "./heroStyle.css";
import React from "react";
import intoImg from "../../asscet/hero img.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="herosection">
      <div className="hero-img">
        <img src={intoImg} alt="into" className="intoimg" />
        <div className="content  text-focus-in">
          <h1 className="">Smart solutions for complex problems</h1>
          <h3>
            We are makers of hardware and software technology solutions that are
            cost-effective, robust, and scalable.
          </h3>

          <button className="btn">
            <Link to="/contact">contact</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
