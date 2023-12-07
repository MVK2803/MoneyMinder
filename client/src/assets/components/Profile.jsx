import React, { useEffect, useState } from "react";
import axios from "axios";
const Profile = () => {
  const handleDeleteUser = async () => {
    // Delete user using "delete-user" endpoint
    try {
      const result = await axios.post("http://localhost:3000/delete-user", {
        headers: {
          "Content-Type": "application/json",
        },
        body: localStorage.getItem("userId"),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full ">
      <button
        onClick={handleDeleteUser}
        className="bg-red-600  rounded-md  text-white font-extrabold p-2 text-2xl"
      >
        DELETE USER
      </button>
    </div>
  );
};

export default Profile;
