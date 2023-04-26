// "use client";
// import { color } from "d3-color";
// import { ResponsivePie } from "@nivo/pie";

// const data = [
//   { country: "Nigeria", count: 68, percent: 34 },
//   { country: "Germany", count: 37, percent: 19 },
//   { country: "Ghana", count: 50, percent: 25 },
//   { country: "Finland", count: 40, percent: 20 },
//   { country: "United Kingdom", count: 4, percent: 2 },
// ];

// const Pie = () => (
 
//   <div style={{ width: "600px", height: "500px" }}>
//     <ResponsivePie
//       data={data.map(({ country, count, percent }) => ({
//         id: country,
//         value: count,
//       }))}
//       margin={{ top: 40, right: 150, bottom: 80, left: 150 }}
//       innerRadius={0.5}
//       padAngle={0.7}
//       cornerRadius={3}
//       activeOuterRadiusOffset={8}
//       borderWidth={1}
//       borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
//       arcLinkLabelsSkipAngle={10}
//       arcLinkLabelsTextColor="#333333"
//       arcLinkLabelsThickness={2}
//       arcLinkLabelsColor={{ from: "color" }}
//       arcLabelsSkipAngle={10}
//       arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
//       valueFormat={(value) => `${Number(value)} %`}
//       legends={[
//         {
//           anchor: "bottom",
//           direction: "row",
//           justify: false,
//           translateX: 0,
//           translateY: 56,
//           itemsSpacing: 0,
//           itemWidth: 90,
//           itemHeight: 18,
//           itemTextColor: "#999",
//           itemDirection: "left-to-right",
//           itemOpacity: 1,
//           symbolSize: 15,
//           symbolShape: "circle",
//           effects: [
//             {
//               on: "hover",
//               style: {
//                 itemTextColor: "#000",
//               },
//             },
//           ],
//         },
//       ]}
//     />
//   </div>
// );

// export default Pie;


import Chart from "react-google-charts";

const data = [
        {
            "source": "google",
            "count": 50,
            "percent": 25
        },
        {
            "source": "instagram",
            "count": 68,
            "percent": 34
        },
        {
            "source": "facebook",
            "count": 40,
            "percent": 20
        },
        {
            "source": "linkedin",
            "count": 41,
            "percent": 21
        }
    ]

const Pie = () => {
  const options = {
    title: "Top Referral source",
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
      width={"500px"}
      height={"300px"}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={[
        ["Country", "Count"],
        ...data.map(({ source, count }) => [country, count]),
      ]}
      options={options}
    />
  );
};

export default Pie;
