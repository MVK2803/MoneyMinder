import React, { useState } from "react";
import axios from "axios";

const TransactionForm = ({ onClose, updateTransaction }) => {
  const defUserId = "MVK";
  const [newTransaction, setNewTransaction] = useState({
    date: "",
    time: "",
    category: "",
    description: "",
    amount: "",
    type: 0, // Default to expense, you can change it if needed
    user_id: defUserId,
  });

  const addTransaction = async () => {
    console.log(newTransaction);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/addTransaction",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: newTransaction,
        }
      );

      const data = await response.data;
      console.log(data);
      //setTransactions([...transactions, data]);
      updateTransaction();
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleAddTransaction = () => {
    addTransaction();
    setNewTransaction({
      date: "",
      time: "",
      category: "",
      description: "",
      amount: "",
      type: 0,
      user_id: defUserId,
    });
    onClose();
  };

  return (
    <div
      className={`w-[30%] h-[75%] p-10 flex flex-col shadow-2xl transaction-form bg-gray-300`}
      style={{
        position: "absolute",
        zIndex: 5,
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        // ... other styles ...
      }}
    >
      <div className="m-3 flex items-center">
        <label className="mr-3">Date:</label>
        <input
          className="rounded-md"
          type="date"
          name="date"
          value={newTransaction.date}
          onChange={handleInputChange}
        />
      </div>
      <div className="m-3 flex items-center">
        <label className="mr-3">Time:</label>
        <input
          className="rounded-md"
          type="time"
          name="time"
          value={newTransaction.time}
          onChange={handleInputChange}
        />
      </div>
      <div className="m-3 flex items-center">
        <label className="mr-3">Category:</label>
        <input
          className="rounded-md"
          type="text"
          name="category"
          value={newTransaction.category}
          onChange={handleInputChange}
        />
      </div>
      <div className="m-3 flex items-center">
        <label className="mr-3">Description:</label>
        <input
          className="rounded-md"
          type="text"
          name="description"
          value={newTransaction.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="m-3 flex items-center">
        <label className="mr-3 ">Amount:</label>
        <input
          type="text"
          name="amount"
          value={newTransaction.amount}
          onChange={handleInputChange}
          className={`rounded-md w-32 ${
            newTransaction.type === "income" ? "green-amount" : "red-amount"
          }`}
        />
      </div>
      <div className="m-3 flex items-center rounded-md">
        <label className="mr-3">Type:</label>
        <select
          className="rounded-md"
          name="type"
          value={newTransaction.type}
          onChange={handleInputChange}
        >
          <option value={1}>Expense</option>
          <option value={0}>Income</option>
        </select>
      </div>
      <div className="m-3 flex items-center">
        <button
          onClick={handleAddTransaction}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2"
        >
          Add Transaction
        </button>
        <button
          onClick={onClose}
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TransactionForm;
