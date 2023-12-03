import React from "react";
import SideBar from "../assets/components/SideBar";
import TopBar from "../assets/components/TopBar";
function LandingPage() {
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  return (
    <div className="w-[90%] h-[85%] bg-white rounded-lg shadow-lg flex flex-row">
      <SideBar />
      <div className="w-full h-full  flex flex-col   ">
        <TopBar />
        <hr className="w-full h-[1px] bg-gray-200" />
        <div className="flex pt-3 items-right">
          <button className="bg-black text-white rounded-full p-3 ml-auto mr-5">+ Add transaction</button>
        </div>


        <div class="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg pt-5 mx-auto">
          <table className="w-full text-sm text-left rtl:text-right table-auto text-gray-500 bg-white ${isDarkMode ? dark:text-gray-400   dark:bg-gray-800">
            <thead class="text-xs text-gray-700 uppercase bg-white   dark:bg-gray-700 text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3 ">
                  Date
                </th>
                <th scope="col" class="px-6 py-3">
                  Time
                </th>
                <th scope="col" class="px-6 py-3">
                  Category
                </th>
                <th scope="col" class="px-6 py-3">
                  Description
                </th>
                <th scope="col" class="px-6 py-3">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  03-12-2023
                </th>
                <td class="px-6 py-4">
                  21:30
                </td>
                <td class="px-6 py-4">
                  Income
                </td>
                <td class="px-6 py-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi hic dolor repellat totam numquam optio doloremque aliquid nesciunt a omnis!
                </td>
                <td class="px-6 py-4 text-right text-green-500">
                  13002
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  20-11-2023
                </th>
                <td class="px-6 py-4">
                  14:45
                </td>
                <td class="px-6 py-4">
                  Food & Drinks
                </td>
                <td class="px-6 py-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio quae cum, culpa accusamus temporibus ut architecto. Assumenda fuga esse, neque veniam repudiandae consequatur dolorum sapiente.
                </td>
                <td class="px-6 py-4 text-right text-red-500">
                  6000
                </td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  21-10-2023
                </th>
                <td class="px-6 py-4">
                  11:33
                </td>
                <td class="px-6 py-4">
                  Grocery
                </td>
                <td class="px-6 py-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat, laborum velit ea quaerat quisquam?
                </td>
                <td class="px-6 py-4 text-right text-red-500">
                  2000
                </td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  21-10-2023
                </th>
                <td class="px-6 py-4">
                  11:33
                </td>
                <td class="px-6 py-4">
                  Travel
                </td>
                <td class="px-6 py-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat, laborum velit ea quaerat quisquam?
                </td>
                <td class="px-6 py-4 text-right text-red-500">
                  2000
                </td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  21-10-2023
                </th>
                <td class="px-6 py-4">
                  11:33
                </td>
                <td class="px-6 py-4">
                  Travel
                </td>
                <td class="px-6 py-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat, laborum velit ea quaerat quisquam?
                </td>
                <td class="px-6 py-4 text-right text-red-500">
                  2000
                </td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  21-10-2023
                </th>
                <td class="px-6 py-4">
                  11:33
                </td>
                <td class="px-6 py-4">
                  Travel
                </td>
                <td class="px-6 py-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat, laborum velit ea quaerat quisquam?
                </td>
                <td class="px-6 py-4 text-right text-red-500">
                  2000
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default LandingPage;
