import "./HomeStyle.css";
import React from "react";
import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import Project from "../components/project/project";

function Home() {
  return (
    <div>
      <Hero></Hero>
      <Services></Services>
      <Project></Project>
    </div>
  );
}

export default Home;
