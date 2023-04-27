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
        <h2 className="text-[#131316] text-xl mb-[46px]">Dashboard</h2>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[#131316] text-lg">Good morning, Blessing ⛅️</h2>
          <h5>Check out your dashboard summary.</h5>
        </div>

        <h5 className="text-base text-[#FF5403] mr-12">View analytics</h5>
      </div>

      <div className="hidden md:flex md:flex-row lg: flex-row gap-2 items-center">
        {daysList.map(({ text, id }) => (
          <div
            className={`px-3 py-2 border-solid rounded-full cursor-pointer ${
              id === "5"
                ? "bg-[#FFEEE5] border-[#FF5403] border text-[#FF5403]"
                : "bg-transparent border-slate-300 border"
            } `}
            key={text}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
