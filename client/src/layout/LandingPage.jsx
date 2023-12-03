import React from "react";
import SideBar from "../assets/components/SideBar";
import TopBar from "../assets/components/TopBar";
function LandingPage() {
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  return (
    <div className="w-[90%] h-[85%] bg-white rounded-lg shadow-lg flex flex-row">
      <SideBar />
      <div className="w-full h-full  flex flex-col  items-center ">
        <TopBar />
        <hr className="w-full h-[1px] bg-gray-200" />
        <div className=" w-full h-fit flex pt-3 items-right">
          <button className="bg-black text-white rounded-full p-3 ml-auto mr-5">+ Add transaction</button>
        </div>


        <div className="w-[90%] overflow-hidden  flex flex-col">
          {/* Headers Div */}
          <div className="flex bg-slate-200 h-fit text-black-500  p-3 ">
            <div className="  w-[10%]">Date</div>
            <div className="  w-[10%]">Time</div>
            <div className="  w-[20%]">Category</div>
            <div className="  w-[40%]">Description</div>
            <div className="  w-[20%]">Amount</div>
          </div>

          {/* Transaction Data Div */}
          <div className="overflow-y-auto flex flex-col h-[500px]">
            <div className="flex border-b-2 p-2">
              <div className="  w-[10%]">03-12-2023</div>
              <div className="  w-[10%]">21:30</div>
              <div className="  w-[20%]">Laptop</div>
              <div className="  w-[40%]">Lorem ipsum dolor </div>
              <div className="  w-[20%]  text-green-500">13002</div>
            </div>
            <div className="flex border-b-2 p-2">
              <div className="  w-[10%]">03-12-2023</div>
              <div className="  w-[10%]">21:30</div>
              <div className="  w-[20%]">Laptop</div>
              <div className="  w-[40%]">Lorem ipsum dolor </div>
              <div className="  w-[20%]  text-green-500">13002</div>
            </div>
            <div className="flex border-b-2 p-2">
              <div className="  w-[10%]">03-12-2023</div>
              <div className="  w-[10%]">21:30</div>
              <div className="  w-[20%]">Laptop</div>
              <div className="  w-[40%]">Lorem ipsum dolor </div>
              <div className="  w-[20%]  text-green-500">13002</div>
            </div>
            <div className="flex border-b-2 p-2">
              <div className="  w-[10%]">03-12-2023</div>
              <div className="  w-[10%]">21:30</div>
              <div className="  w-[20%]">Laptop</div>
              <div className="  w-[40%]">Lorem ipsum dolor </div>
              <div className="  w-[20%]  text-green-500">13002</div>
            </div>
            <div className="flex border-b-2 p-2">
              <div className="  w-[10%]">03-12-2023</div>
              <div className="  w-[10%]">21:30</div>
              <div className="  w-[20%]">Laptop</div>
              <div className="  w-[40%]">Lorem ipsum dolor </div>
              <div className="  w-[20%]  text-green-500">13002</div>
            </div>
            <div className="flex border-b-2 p-2">
              <div className="  w-[10%]">03-12-2023</div>
              <div className="  w-[10%]">21:30</div>
              <div className="  w-[20%]">Laptop</div>
              <div className="  w-[40%]">Lorem ipsum dolor </div>
              <div className="  w-[20%]  text-green-500">13002</div>
            </div>
            <div className="flex border-b-2 p-2">
              <div className="  w-[10%]">03-12-2023</div>
              <div className="  w-[10%]">21:30</div>
              <div className="  w-[20%]">Laptop</div>
              <div className="  w-[40%]">Lorem ipsum dolor </div>
              <div className="  w-[20%]  text-green-500">13002</div>
            </div>
            <div className="flex border-b-2 p-2">
              <div className="  w-[10%]">03-12-2023</div>
              <div className="  w-[10%]">21:30</div>
              <div className="  w-[20%]">Laptop</div>
              <div className="  w-[40%]">Lorem ipsum dolor </div>
              <div className="  w-[20%]  text-green-500">13002</div>
            </div>
            <div className="flex border-b-2 p-2">
              <div className="  w-[10%]">03-12-2023</div>
              <div className="  w-[10%]">21:30</div>
              <div className="  w-[20%]">Laptop</div>
              <div className="  w-[40%]">Lorem ipsum dolor </div>
              <div className="  w-[20%]  text-green-500">13002</div>
            </div>
            <div className="flex border-b-2 p-2">
              <div className="  w-[10%]">03-12-2023</div>
              <div className="  w-[10%]">21:30</div>
              <div className="  w-[20%]">Laptop</div>
              <div className="  w-[40%]">Lorem ipsum dolor </div>
              <div className="  w-[20%]  text-green-500">13002</div>
            </div>
            <div className="flex border-b-2 p-2">
              <div className="  w-[10%]">03-12-2023</div>
              <div className="  w-[10%]">21:30</div>
              <div className="  w-[20%]">Laptop</div>
              <div className="  w-[40%]">Lorem ipsum dolor </div>
              <div className="  w-[20%]  text-green-500">13002</div>
            </div>
            <div className="flex border-b-2 p-2">
              <div className="  w-[10%]">03-12-2023</div>
              <div className="  w-[10%]">21:30</div>
              <div className="  w-[20%]">Laptop</div>
              <div className="  w-[40%]">Lorem ipsum dolor </div>
              <div className="  w-[20%]  text-green-500">13002</div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default LandingPage;
