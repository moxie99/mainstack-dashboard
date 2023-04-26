"use client";

const daysList = [
  {
    text: "1 Day",
    id: "1",
  },
  {
    text: "3 Day",
    id: "2",
  },
  {
    text: "7 Day",
    id: "3",
  },
  {
    text: "30 Day",
    id: "4",
  },
  {
    text: "All Time",
    id: "5",
  },
  {
    text: "Custom Date",
    id: "6",
  },
];

const Navbar = () => {
  return (
    <div className="flex flex-col mt-[20px]">
      <div>
        <h2 >Dashboard</h2>
      </div>

      <div>
        <div>
          <h2 className="text-[#131316] text-lg">Good morning, Blessing ⛅️</h2>
          <h5>Check out your dashboard summary.</h5>
        </div>

        <h5>View analytics</h5>
      </div>

      <div className="hidden md:flex md:flex-row lg: flex-row gap-2 items-center">
        {daysList.map(({ text, id }) => (
          <div
            className={`px-3 py-2 border-solid rounded-full ${
              id === "5"
                ? "bg-[#FFEEE5] border-[#FF5403] border"
                : "bg-transparent border-slate-300 border"  
            } `}
            key={text}
          >
            {text}
          </div>
        ))}
      </div>

      <h5>500</h5>

      <h5></h5>
    </div>
  );
};

export default Navbar;
