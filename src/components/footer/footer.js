import "./footerStyle.css";
import React from "react";
import { Link } from "react-router-dom";
import brandlogo from "../../asscet/brand_logo.png";
import {
  FaCopyright,
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="footer-into">
          <Link to="/">
            {" "}
            <img src={brandlogo} alt="logo" className="footerLogo" />
            <h3>smart solution for complex problems</h3>
          </Link>
        </div>
        <div className="footer-content">
          <h2>company</h2>
          <Link to="/about">
            <h2>about</h2>
          </Link>
          <Link to="/work">
            <h2>work</h2>
          </Link>
          <Link to="/contact">
            {" "}
            <h2>contact us</h2>
          </Link>
          <FaFacebookSquare className="footer-icon"></FaFacebookSquare>
          <FaGithubSquare className="footer-icon"></FaGithubSquare>
          <FaTwitterSquare className="footer-icon"></FaTwitterSquare>
        </div>
      </div>
      <div className="footer-copyrights">
        <h3 className="footer-copyrights">
          <FaCopyright /> 2023 binary design Limited.all rights reserved
        </h3>
      </div>
    </div>
  );
};

export default Footer;
