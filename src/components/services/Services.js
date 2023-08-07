import "./servicesStyle.css";
import React from "react";
import ServicesCard from "./ServicesCard";
import servicesItemD from "./servicesItemData";

const Services = () => {
  return (
    <div className="services-container ">
      <div className="services-into">
        <h3>our services</h3>
        <h1>what we do</h1>
      </div>
      <div className="services-card-container">
        {servicesItemD.map((val, ind) => {
          return (
            <ServicesCard
              key={ind}
              icon={val.icon}
              titel={val.ti}
              text={val.Text}
            ></ServicesCard>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
