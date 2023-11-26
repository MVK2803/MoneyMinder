import React from "react";
import SideBar from "../assets/components/SideBar";
import TopBar from "../assets/components/TopBar";
function LandingPage() {
  return (
    <div className="w-[90%] h-[85%] bg-white rounded-lg shadow-lg flex flex-row">
      <SideBar />
      <div className="w-full h-full  flex flex-col   ">
        <TopBar />
        <hr className="w-full h-[1px] bg-gray-200" />
      </div>
    </div>
  );
}

export default LandingPage;
