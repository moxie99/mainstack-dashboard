"use client";

import Chart from "react-google-charts";
const data = [
  { country: "Nigeria", count: 68, percent: 34 },
  { country: "Germany", count: 37, percent: 19 },
  { country: "Ghana", count: 50, percent: 25 },
  { country: "Finland", count: 40, percent: 20 },
  { country: "United Kingdom", count: 4, percent: 2 },
];

const PieChart = () => {
  const options = {
    title: "Top Locations",
    pieHole: 0.4,
    is3D: true,
    slices: [
      { color: "#599EEA" },
      { color: "#844FF6" },
      { color: "#0FB77A" },
      { color: "#FAB70A" },
      { color: "#F09468" },
    ],
  };

  return (
    <div className="flex flex-row justify-between px-10 py-10 border-[#EFF1F6] border rounded-md w-[30vw]  mr-10">
      <div>
        <Chart
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Country", "Count"],
            ...data.map(({ country, count }) => [country, count]),
          ]}
          options={options}
        />
      </div>
      {/* <h5 className="text-[#FF5403] text-sm font-light">View full reports</h5> */}
    </div>
  );
};

export default PieChart;

