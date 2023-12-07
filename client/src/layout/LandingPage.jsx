import React from "react";
import SideBar from "../assets/components/SideBar";
import TopBar from "../assets/components/TopBar";
import Transactions from "../assets/components/Transaction";
import Chart from "../assets/components/MainGraph";
import Accounts from "../assets/components/Account";
import { useState } from "react";

function LandingPage() {
  const [selectedComponent, setSelectedComponent] = useState("transactions");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "transactions":
        return <Transactions />;
      case "chart":
        return <Chart />;
      case "accounts":
        return <Accounts />;
      // Add more cases for other components as needed
      default:
        return <Transactions />;
    }
  };

  return (
    <div className="w-[90%] h-[85%] bg-white rounded-lg shadow-lg flex flex-row">
      <SideBar  onSelectComponent={setSelectedComponent}
        selectedComponent={selectedComponent} // Pass selectedComponent prop
        />
      <div className="w-full h-full  flex flex-col  items-center justify-center">
        <TopBar />
        <hr className="w-full h-[1px]"/>
       {/* <Accounts/>
        <Chart /> */}
        {/* <Transactions/>  */}
        {renderComponent()}
      </div>
    </div>
  );
}

export default LandingPage;
