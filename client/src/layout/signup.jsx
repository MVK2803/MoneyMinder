// SignUp.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import user_icon from "../assets/person-bounding-box.svg";
import email_icon from "../assets/envelope-at.svg";
import password_icon from "../assets/lock.svg";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/add-user",
        formData
      );
      alert("User created successfully:", response.data);
      navigate("/");

      // You can redirect or perform any other actions after successful user creation
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="w-[30%] h-[70%] bg-white rounded-lg shadow-lg flex flex-col space-y-5  ">
      <div className="w-full  text-center">
        <h className="text-3xl font-bold text-slate-400">
          Money<span className="text-black">Minder.</span>
        </h>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="items-center flex flex-col justify-center space-y-5 ">
          <div className=" flex items-center space-x-5  w-[75%] ">
            <img src={user_icon} alt="" className="w-30 h-30" />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border-2 border-gray-200 rounded-md p-1 focus:outline-none"
              placeholder="User Name"
            />
          </div>
          <div className=" flex items-center space-x-5  w-[75%] ">
            <img src={user_icon} alt="" className="w-30 h-30" />
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border-2 border-gray-200 rounded-md p-1 focus:outline-none"
              placeholder="First Name"
            />
          </div>
          <div className=" flex items-center space-x-5  w-[75%] ">
            <img src={user_icon} alt="" className="w-30 h-30" />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border-2 border-gray-200 rounded-md p-1 focus:outline-none"
              placeholder="Last Name"
            />
          </div>
          <div className=" flex items-center space-x-5  w-[75%] ">
            <img src={email_icon} alt="" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-2 border-gray-200 rounded-md p-1 focus:outline-none"
              placeholder="Enter E-mail"
            />
          </div>
          <div className=" flex items-center space-x-5  w-[75%] ">
            <img src={password_icon} alt="" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border-2 border-gray-200 rounded-md p-1 focus:outline-none"
              placeholder="Enter Password"
            />
          </div>
          <div className=" flex items-center space-x-5  w-[75%] ">
            <img src={password_icon} alt="" />
            <input
              type="password"
              name="confirmPassword"
              className="w-full border-2 border-gray-200 rounded-md p-1 focus:outline-none"
              placeholder="Confirm Password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="text-lg bg-black hover:bg-slate-700 text-white font-medium py-2 px-4 rounded p-8"
            >
              Create Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
