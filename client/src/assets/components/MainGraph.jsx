import React from 'react';
import { CurrencyDollarIcon } from '@heroicons/react/outline'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

const incomeData = [33, 53, 85, 61, 54, 85];
const expenseData = [33, 25, 35, 51, 54, 76];

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Income",
      data: incomeData,
      fill: true,
      backgroundColor: "rgba(0, 217, 84,0.2)",
      borderColor: "rgba(0, 217, 84,1)"
    },
    {
      label: "Expense",
      data: expenseData,
      fill: false,
      borderColor: "#FF0000"
    },
    {
      label: "Balance",
      data: [], // This will be dynamically calculated: income - expense
      fill: false,
      borderColor: "#000000"
    }
    
  ]
};

const calculateBalance = (income, expense) => {
    return income.map((value, index) => value - expense[index]);
  };

const Chart = () => {
  data.datasets.find((dataset) => dataset.label === 'Income').data;
  data.datasets.find((dataset) => dataset.label === 'Expense').data;
  data.datasets.find(dataset => dataset.label === "Balance").data = calculateBalance(incomeData, expenseData);

  const chartOptions = {
    maintainAspectRatio: true, // Set to false to make the chart fill its container
    responsive: true,
  };
  
  return (
    <div className="w-[90%] h-[90%] flex items-center flex-col justify-center ">
      
      <Line data={data} options={chartOptions} />
    </div>
  );
}

export default Chart;