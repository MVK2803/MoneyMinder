export default function Transactions() {
  const transactions = [
    {
      date: "03-12-2023",
      time: "21:30",
      type: 1,
      description: "Lorem ipsum dolor",
      amount: "13002",
    },
    {
      date: "03-12-2023",
      time: "21:30",
      type: 0,
      description: "Lorem ipsum dolor",
      amount: "13002",
    },
    {
      date: "03-12-2023",
      time: "21:30",
      type: 1,
      description: "Lorem ipsum dolor",
      amount: "13002",
    },
    {
      date: "03-12-2023",
      time: "21:30",
      type: 0,
      description: "Lorem ipsum dolor",
      amount: "13002",
    },
    {
      date: "03-12-2023",
      time: "21:30",
      type: 1,
      description: "Lorem ipsum dolor",
      amount: "13002",
    },
  ];
  return (
    <div className="w-[90%] overflow-hidden  flex flex-col space-y-2">
      <div className=" w-full h-fit flex pt-3 items-right ">
        <button className="bg-black text-white rounded-md p-3 ml-auto">
          + Add transaction
        </button>
      </div>
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
        {transactions.map((transaction, index) => (
          <div key={index} className={`flex border-b-2 p-2`}>
            <div className="w-[10%]">{transaction.date}</div>
            <div className="w-[10%]">{transaction.time}</div>
            <div className="w-[20%]">Laptop</div>
            <div className="w-[40%]">{transaction.description}</div>
            <div
              className={`w-[20%] ${
                transaction.type ? "text-red-500" : "text-green-500"
              }`}
            >
              {transaction.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
