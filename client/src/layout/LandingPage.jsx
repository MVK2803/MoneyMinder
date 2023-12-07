import React from "react";
import SideBar from "../assets/components/SideBar";
import TopBar from "../assets/components/TopBar";
import Transactions from "../assets/components/Transaction";
import Chart from "../assets/components/MainGraph";
import Accounts from "../assets/components/Account";

function LandingPage() {
  return (
    <div className="w-[90%] h-[85%] bg-white rounded-lg shadow-lg flex flex-row">
      <SideBar />
      <div className="w-full h-full  flex flex-col  items-center justify-center">
        <TopBar />
        <hr className="w-full h-[1px]"/>
       {/* <Accounts/>
        <Chart /> */}
        <Transactions/> 
      </div>
    </div>
  );
}

export default LandingPage;
