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
      { color: "#2ecc71" },
      { color: "#3498db" },
      { color: "#f1c40f" },
      { color: "#e74c3c" },
      { color: "#9b59b6" },
    ],
  };

  return (
    <Chart
      width={"700px"}
      height={"300px"}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={[
        ["Country", "Count"],
        ...data.map(({ country, count }) => [country, count]),
      ]}
      options={options}
    />
  );
};

export default PieChart;
