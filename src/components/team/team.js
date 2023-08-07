import "./teamStyle.css";
import React, { useEffect, useState } from "react";
import TeamMember from "./teamMember";

const TeamList = () => {
  const [data, setdata] = useState([]);
  const featchdata = async () => {
    const respons = await fetch("https://dummyjson.com/users");
    const data = await respons.json();
    setdata(data.users);
  };
  useEffect(() => {
    featchdata();
  }, []);

  return (
    <div className="team-list">
      <div className="team-List-section">
        <p>our people</p>
        <h2>the team</h2>
      </div>
      <div className="team-member-container">
        {data.map((val) => {
          const fullname = val.firstName + " " + val.lastName;
          const post = val.company.department;
          const addres = val.address.city + " " + val.address.state;
          return (
            <TeamMember
              key={val.id}
              imge={val.image}
              name={fullname}
              post={post}
              addres={addres}
              email={val.email}
              phone={val.phone}
            ></TeamMember>
          );
        })}
      </div>
    </div>
  );
};

export default TeamList;
