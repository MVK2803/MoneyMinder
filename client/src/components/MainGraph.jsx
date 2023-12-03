import { CurrencyDollarIcon } from '@heroicons/react/outline'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Balance",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(0, 217, 84,0.2)",
      borderColor: "rgba(0, 217, 84,1)"
    }
  ]
};

const Chart = () => {

  return (
    <div className="w-5/6">
      <span className="flex flex-row items-center ml-2 mb-2 font-bold text-[14px] text-oceanblue">
        <CurrencyDollarIcon className="w-5 h-5 mr-2" color="rgba(0, 217, 84,1)" />
        Current Balance
      </span>
      <Line data={data} />
    </div>
  )
}

export default Chart;