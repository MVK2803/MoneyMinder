export default function TopBar() {
  return (
    <div className="w-full flex flex-row justify-between items-center  p-2 pl-[20px] pr-[20px]">
      <h className="text-lg font-bold">Dashboard</h>
      <div className="w-[40px] h-[40px] rounded-[50px]">
        <img
          src="https://picsum.photos/536/354"
          className="rounded-[50px] w-full h-full"
        ></img>
      </div>
    </div>
  );
}
