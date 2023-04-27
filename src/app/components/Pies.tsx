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
    <div className="px-10 py-10 border-[#EFF1F6] border rounded-md border-slate-500">
    <Chart
      // width={"500px"}
      // height={"300px"}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={[
        ["Country", "Count"],
        ...data.map(({ source, count }) => [source, count]),
      ]}
      options={options}
    />
    </div>
  );
};

export default Pie;
// import Chart from "react-google-charts";
// import ReactCountryFlag from "react-country-flag";
// import Image from "next/image";

// const data = [
//   {
//     source: "google",
//     count: 50,
//     percent: 25,
//     logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
//   },
//   {
//     source: "instagram",
//     count: 68,
//     percent: 34,
//     logo: "https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png",
//   },
//   {
//     source: "facebook",
//     count: 40,
//     percent: 20,
//     logo: "https://www.facebook.com/images/fb_icon_325x325.png",
//   },
//   {
//     source: "linkedin",
//     count: 41,
//     percent: 21,
//     logo: "https://www.linkedin.com/favicon.ico",
//   },
// ];

// const Pie = () => {
//   const options = {
//     title: "Top Referral source",
//     pieHole: 0.4,
//     is3D: true,
//     slices: [
//       { color: "#599EEA" },
//       { color: "#844FF6" },
//       { color: "#0FB77A" },
//       { color: "#FAB70A" },
//       { color: "#F09468" },
//     ],
//   };

//   const chartData = [
//     ["Source", "Count", { role: "style" }, { role: "annotation" }],
//     ...data.map(({ source, count, logo }) => [
//       <div key={logo} style={{ display: "flex", alignItems: "center" }}>
//         <Image src={logo} alt={logo} height={20} width={20} />
//         <span style={{ marginLeft: "10px" }}>{source}</span>
//       </div>,
//       source,
//       count,
//     ]),
//   ];

//   return (
//     <Chart
//       chartType="PieChart"
//       loader={<div>Loading Chart</div>}
//       data={chartData}
//       options={options}
//     />
//   );
// };

// export default Pie;
