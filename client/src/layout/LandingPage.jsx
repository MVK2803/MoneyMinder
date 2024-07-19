import React from "react";
import SideBar from "../assets/components/SideBar";
import TopBar from "../assets/components/TopBar";
import Transactions from "../assets/components/Transaction";
import Chart from "../assets/components/MainGraph";
import Accounts from "../assets/components/Account";
import Profile from "../assets/components/Profile";
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
      case "profile":
        return <Profile />;
      default:
        return <Transactions />;
    }
  };

  return (
    <div className="w-[90%] h-[85%] bg-white rounded-lg shadow-lg flex flex-row">
      <SideBar
        onSelectComponent={setSelectedComponent}
        selectedComponent={selectedComponent} // Pass selectedComponent prop
      />
      <div className="w-full h-full  flex flex-col  items-center justify-center">
        <TopBar />
        <hr className="w-full h-[1px]" />
        {/* <Accounts/>
        <Chart /> */}
        {/* <Transactions/>  */}
        {renderComponent()}
      <SideBar />
      <div className="w-full h-full  flex flex-col">
        <TopBar />
        <hr className="w-full h-[1px] bg-gray-200" />
        <div className="w-full h-full flex justify-center">
          <div className="w-full pl-[20px] pr-[20px] pt-2 h-[30%] flex justify-center items-center space-x-2">
            <div className="w-1/3 h-full flex flex-col">
              <div className="text-lg font-medium pt-[5%] pb-[5%] flex">
                <h className="text-2xl font-thin">Balance</h>
              </div>
              <div className="text-lg flex">
                <h className="text-4xl font-extrabold ">$ 77445.00</h>
              </div>
            </div>
            <div className="w-1/3 h-full rounded-md border border-2 flex flex-col">
              <div className="text-lg font-medium text-center  pt-[5%] pb-[5%] bg-slate-200">
                <p>Income</p>
              </div>
              <div className="w-full h-full flex justify-center items-center">
                <h className="text-4xl font-extrabold">$ 123123.00</h>
              </div>
            </div>
            <div className="w-1/3 h-full rounded-md border border-2 flex flex-col">
              <div className="text-lg font-medium text-center pt-[5%] pb-[5%] bg-slate-200">
                <p>Expenses</p>
              </div>
              <div className="w-full h-full flex justify-center items-center">
                <h className="text-4xl font-extrabold">$ 45678.00</h>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
