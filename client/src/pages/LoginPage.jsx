import React from "react";
function loginPage() {
  return (
    <div className="w-[60%] h-[75%] bg-white rounded-xl shadow-lg flex flex-row">
      <div class="w-[50%] h-full bg-blue-200 rounded-l-xl ">
        <img
          className="h-full w-full rounded-l-lg object-cover object-center  filter grayscale"
          src="https://ubiq.co/analytics-blog/wp-content/uploads/2020/03/financial-charts-graphs.png"
          alt="nature image"
        />
      </div>
      <div className="w-[50%] h-full text-2xl font-bold flex flex-col  items-center justify-center  space-y-5">
        <div className="flex flex-col w-full  md:w-[90%] space-y-5  items-center">
          <h className="text-3xl text-slate-400">
            Money<span className="text-black">Minder.</span>
          </h>
          <div class="flex flex-col w-[75%]  text-lg font-medium">
            <i class="bi bi-person"></i>
            <p>Enter Username</p>
            <input
              className="w-full border border-2 rounded-md focus:outline-none p-2 text-lg font-light"
              placeholder="Username"
            ></input>
          </div>
          <div class="flex flex-col w-[75%]  text-lg font-medium">
            <p>Enter Password</p>
            <input
              type="password"
              className="w-full border border-2 rounded-md focus:outline-none p-2 text-lg font-light"
              placeholder="Password"
            ></input>
          </div>
          <div className="flex text-lg font-medium">
            <input type="checkbox"></input>
            <p className="px-2">Remember Me</p>
          </div>
          <div>
            <button className="text-lg bg-black hover:bg-slate-700 text-white font-medium py-2 px-4 rounded p-8">
              Login to your Account
            </button>
          </div>
          <div class="text-base font-medium">
            <p className="font-thin">
              Not registered?{" "}
              <button className="font-bold"> Create account</button>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default loginPage;
