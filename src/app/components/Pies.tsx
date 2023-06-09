"use client";

import Chart from "react-google-charts";
import ReactCountryFlag from "react-country-flag";

const data = [
  {
    source: "google",
    count: 50,
    percent: 25,
  },
  {
    source: "instagram",
    count: 68,
    percent: 34,
  },
  {
    source: "facebook",
    count: 40,
    percent: 20,
  },
  {
    source: "linkedin",
    count: 41,
    percent: 21,
  },
];

const Pie = () => {
  const options = {
    title: "Top Referral source",
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
    <div className="flex flex-row justify-between px-10 py-10 border-[#EFF1F6] border rounded-md w-[30vw] mr-10">
      <Chart
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Country", "Count"],
          ...data.map(({ source, count }) => [source, count]),
        ]}
        options={options}
      />
      {/* <h5 className="text-[#FF5403] text-sm font-light">View full reports</h5> */}
    </div>
  );
};

export default Pie;
