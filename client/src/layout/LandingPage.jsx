// LandingPage.jsx

import React, { useState } from "react";
import SideBar from "../assets/components/SideBar";
import TopBar from "../assets/components/TopBar";
import TransactionForm from "./TransactionForm";

function LandingPage() {
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [showTransactionForm, setShowTransactionForm] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    // Check for required fields
    if (!newTransaction.date || !newTransaction.time || !newTransaction.category || !newTransaction.amount) {
      alert("Please fill in all required fields.");
      return;
    }

    // Check for valid date and time format (you may want to enhance this validation)
    const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
    const timeRegex = /^\d{2}:\d{2}$/;

    if (!dateRegex.test(newTransaction.date) || !timeRegex.test(newTransaction.time)) {
      alert("Please enter a valid date (DD-MM-YYYY) and time (HH:MM).");
      return;
    }

    // Add the new transaction
    setTransactions([...transactions, newTransaction]);

    // Clear form and close the form
    setShowTransactionForm(false);
  };

  return (
    <div className="w-[90%] h-[85%] bg-white rounded-lg shadow-lg flex flex-row">
      <SideBar />
      <div className="w-full h-full  flex flex-col  items-center ">
        <TopBar />
        <hr className="w-full h-[1px] bg-gray-200" />
        <div className="w-full h-fit flex pt-3 items-right">
          {/* Button to toggle the TransactionForm visibility */}
          <button
            className="bg-black text-white rounded-full p-3 ml-auto mr-5"
            onClick={() => setShowTransactionForm(!showTransactionForm)}
          >
            + Add transaction
          </button>
        </div>

        <div className="w-[90%] overflow-hidden  flex flex-col">
          {/* Headers Div */}
          <div className="flex bg-slate-200 h-fit text-black-500  p-3 ">
            <div className="w-[10%]">Date</div>
            <div className="w-[10%]">Time</div>
            <div className="w-[20%]">Category</div>
            <div className="w-[40%]">Description</div>
            <div className="w-[20%]">Amount</div>
          </div>

          {/* Transaction Data Div */}
          <div className="overflow-y-auto flex flex-col h-[500px]">
            {/* Render existing transactions */}
            {transactions.map((transaction, index) => (
              <div key={index} className="flex border-b-2 p-2">
                <div className="w-[10%]">{transaction.date}</div>
                <div className="w-[10%]">{transaction.time}</div>
                <div className="w-[20%]">{transaction.category}</div>
                <div className="w-[40%]">{transaction.description}</div>
                <div className={`w-[20%] ${transaction.type === "income" ? "text-green-500" : "text-red-500"}`}>
                  {transaction.amount}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Render TransactionForm component */}
        <TransactionForm
          isOpen={showTransactionForm}
          onClose={() => setShowTransactionForm(false)}
          onAddTransaction={handleAddTransaction}
        />
      </div>
    </div>
  );
}

export default LandingPage;
