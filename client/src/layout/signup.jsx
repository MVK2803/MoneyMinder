// SignUp.jsx
import React, { useState } from "react";

import user_icon from "../assets/person-bounding-box.svg";
import email_icon from "../assets/envelope-at.svg";
import password_icon from "../assets/lock.svg";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // You can send this data to your backend API for further processing
  };

  return (
    <div className="w-[30%] h-[70%] bg-white rounded-lg shadow-lg flex flex-col space-y-5  ">
      <div className="w-full  text-center">
        <h className="text-3xl font-bold text-slate-400">
          Money<span className="text-black">Minder.</span>
        </h>
      </div>
      <div className="items-center flex flex-col justify-center space-y-5 ">
        <div className=" flex items-center space-x-5  w-[75%] ">
          <img src={user_icon} alt="" classname="w-30 h-30" />
          <input
            type="text"
            name=""
            id=""
            className=" w-full border-2 border-gray-200 rounded-md p-1 focus:outuline-none"
            placeholder="First Name"
          />
        </div>
        <div className=" flex items-center space-x-5  w-[75%] ">
          <img src={user_icon} alt="" classname="w-30 h-30" />
          <input
            type="text"
            name=""
            id=""
            className=" w-full border-2 border-gray-200 rounded-md p-1 focus:outuline-none"
            placeholder="Last Name"
          />
        </div>
        <div className=" flex items-center space-x-5  w-[75%] ">
          <img src={email_icon} alt="" />
          <input
            type="email"
            name=""
            id=""
            className=" w-full border-2 border-gray-200 rounded-md p-1 focus:outuline-none"
            placeholder="Enter E-mail"
          />
        </div>
        <div className=" flex items-center space-x-5  w-[75%] ">
          <img src={password_icon} alt="" />
          <input
            type="password"
            name=""
            id=""
            className=" w-full border-2 border-gray-200 rounded-md p-1 focus:outuline-none"
            placeholder="Enter Password"
          />
        </div>
        <div className=" flex items-center space-x-5  w-[75%] ">
          <img src={password_icon} alt="" />
          <input
            type="password"
            name=""
            id=""
            className=" w-full border-2 border-gray-200 rounded-md p-1 focus:outuline-none"
            placeholder="Confirm Password"
          />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
