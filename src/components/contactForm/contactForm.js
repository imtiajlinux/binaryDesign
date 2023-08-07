import "./contactForm.css";
import React, { useState } from "react";

const ContactForm = () => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handelchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata({ ...data, [name]: value });
  };
  const allinput =
    data.name + " " + data.email + " " + data.phone + " " + data.message;
  const handelsubmit = (e) => {
    e.preventDefault();
    if (
      data.name === "" ||
      data.email === "" ||
      data.phone === "" ||
      data.message === ""
    ) {
      alert("The input is empty fill them");
    } else {
      alert(allinput);
    }
  };

  return (
    <div className="contact-form-bg contact-container">
      <div className="contact-form ">
        <form action="" method="post" onSubmit={handelsubmit}>
          <h2>
            contact <span>here</span>
          </h2>
          <input
            type="text"
            name="name"
            placeholder="jhon sina"
            onChange={handelchange}
            value={data.name}
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="example@email.com"
            onChange={handelchange}
            value={data.email}
          />
          <input
            type="number"
            name="phone"
            placeholder="+88017777777777"
            onChange={handelchange}
            value={data.phone}
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="type here ....."
            onChange={handelchange}
            value={data.message}
          ></textarea>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
