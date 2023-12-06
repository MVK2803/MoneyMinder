export default function Accounts()
{
    return(
        <div className=" mt-[3px]  w-full h-[20%] justify-evenly flex flex-row text-center">
        <div className="font-extrabold text-2xl w-[20%] border rounded-md">
        <h className="font-medium">Current Balance</h>
        <p>$9000</p>

        </div>
        <div className="font-extrabold text-2xl w-[20%] border text-center rounded-md">
        <h className="font-medium">Total Expense</h>
        <p>$76000</p>

        </div>
        <div className="font-extrabold text-2xl w-[20%] border text-center rounded-md">
        <h className="font-medium">Total Income</h>
        <p>$85000</p>

        </div>

        </div>
    );
}