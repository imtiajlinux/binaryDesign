import "./navStyle.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Brandlogo from "../../asscet/brand_logo.png";
import logo from "../../asscet/bar.png";
import { FaTimes } from "react-icons/fa";

const Narber = () => {
  const [click, setClick] = useState(false);
  const handelclick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changecolor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changecolor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <img src={Brandlogo} alt="logo" className="logo" />
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/work">work</Link>
        </li>
        <li>
          <Link to="/team">team</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handelclick}>
        {click ? (
          <FaTimes color="red" fontSize="2rem"></FaTimes>
        ) : (
          <img src={logo} alt="" className="bar" />
        )}
      </div>
    </div>
  );
};

export default Narber;
