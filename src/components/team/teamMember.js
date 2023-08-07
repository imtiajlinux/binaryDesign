import "./teamMemberStyle.css";
import React from "react";

const TeamMember = ({ imge, name, post, email, phone, addres }) => {
  return (
    <div className="team-member-card" data-aos="fade-up">
      <img src={imge} alt="face" />
      <h2>{name}</h2>
      <h3>{post}</h3>
      <h3>{phone}</h3>
      <h3>{email}</h3>
      <h3>{addres}</h3>
    </div>
  );
};

export default TeamMember;
