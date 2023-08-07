import "./aboutHeroImgStyle.css";
import React from "react";
import heroimg from "../../asscet/about page hero img.jpg";
import Services from "../services/Services";

const AboutHeroImg = () => {
  return (
    <div>
      <div className="about-hero-img-container">
        <div className="about-hero-img-content">
          <h3>about us</h3>
          <h2>our story</h2>

          <p>
            Formed in 2008, Octal has over 10 years of experience developing
            innovative software and hardware solutions for a variety of business
            needs.
          </p>
          <p>
            We've spent years crafting innovative technology, from the hardware
            right up to the user interface, to deliver connected experiences to
            end users.
          </p>
          <p>
            Our specialities lie in tackling those tricky problems, where
            existing solutions either don't exist, or are so expensive they make
            your eyes water. Our combined experience in software and electrical
            enginnering give us a leg against incumbents, allowing us to
            approach problems holistically and consider the entire problem and
            design a solution, without all the overhead.
          </p>
          <p>
            Based out of Wellington, New Zealand, we focus on applying that Kiwi
            can-do attitude to every project we work on. We love a challenge,
            bring it on. ‍
          </p>
          <p>
            <h3>the people</h3> Octal was founded by Michael Calcinai, and works
            through established relationships with technology experts, including
            designers, architects, consultants, and developers, depending on the
            needs of each project.
          </p>
        </div>
        <div className="hero-img-img">
          <img src={heroimg} alt="hero" className="hero-img" />
        </div>
      </div>
      <Services></Services>
    </div>
  );
};

export default AboutHeroImg;
