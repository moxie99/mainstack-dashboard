"use client";

// import Chart from "react-google-charts";

// const data = {
//   "2022-07-31": 1,
//   "2022-08-01": 3,
//   "2022-08-02": 3,
//   "2022-08-03": 7,
//   "2022-08-04": 8,
//   "2022-08-05": 5,
//   "2022-08-06": 20,
//   "2022-08-07": 50,
//   "2022-08-08": 100,
//   "2022-08-09": 2,
// };

// const formatDate = (dateString: any) => {
//   const date = new Date(dateString);
//   const month = date.toLocaleString("default", { month: "short" });
//   const day = date.getDate();
//   return `${month} ${day}`;
// };

// const LineChart = () => {
//   const formattedData = [["Date", 1]];
//   for (const [date, value] of Object.entries(data)) {
//     formattedData.push([formatDate(date), Number(value)]);
//   }

//   const chartStyle = {
//     width: "100%",
//   };

//   return (
//     <div className="ml-40">
//       <div className="px-10 py-10 border-[#EFF1F6] border rounded-md">
//         <div>
//           <h1 className="text-base font-semibold text-[#131316] mb-[8px]">
//             Page Views
//           </h1>

//           <h4 className="text-sm font-light text-[#31373D]">All time</h4>

//           <h1 className="text-[48px] font-bold text-[#131316] mt-[24px] mb-[10px]">
//             500
//           </h1>
//         </div>

//         <div>
//           <Chart
//             style={chartStyle}
//             height={"300px"}
//             chartType="LineChart"
//             loader={<div>Loading Chart</div>}
//             data={formattedData}
//             options={{
//               title: "Value by Date",
//               hAxis: {
//                 title: "Date",
//                 titleTextStyle: { color: "#333" },
//               },
//               vAxis: {
//                 minValue: 0,
//               },
//               colors: ["#FF5403"],
//               series: {
//                 0: {
//                   areaOpacity: 0.3,
//                   areaColor: "#FF540333",
//                 },
//                 animation: {
//                   startup: true,
//                   easing: "linear",
//                   duration: 1500,
//                 },
//                 legend: { position: "none" },
//               },
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LineChart;

// import React, { useEffect } from "react";
// import { Chart } from "google-charts";
// import { LineChart } from "@types/google.visualization";

// const LineChart = () => {
//   const options = {
//     colors: ["#FF5403"],
//     legend: "none",
//     chartArea: {
//       width: "80%",
//       height: "80%",
//     },
//     hAxis: {
//       title: "Date",
//       format: "MMM dd, yyyy",
//       gridlines: { color: "transparent" },
//       textStyle: { color: "#333" },
//     },
//     vAxis: {
//       title: "Value",
//       gridlines: { color: "transparent" },
//       textStyle: { color: "#333" },
//     },
//     areaOpacity: 0.2,
//     backgroundColor: { fill: "#fff" },
//     series: {
//       0: { areaOpacity: 0.2, color: "#FF5403" },
//     },
//   };
//   useEffect(() => {
//     // Load the LineChart module and set a callback function
//     Chart.load("current", { packages: ["corechart"] }).then(() => {
//       const data = new Chart.DataTable();
//       data.addColumn("date", "Date");
//       data.addColumn("number", "Value");
//       data.addRows([
//         ["2022-07-31", 1],
//         ["2022-08-01", 3],
//         ["2022-08-02", 3],
//         ["2022-08-03", 7],
//         ["2022-08-04", 8],
//         ["2022-08-05", 5],
//         ["2022-08-06", 20],
//         ["2022-08-07", 50],
//         ["2022-08-08", 100],
//         ["2022-08-09", 2],
//       ]);

//       const chart = new LineChart(
//         document.getElementById("chart") as HTMLElement
//       );
//       chart.draw(data, options);
//     });
//   }, []);

//   return <div id="chart" />;
// };

// export default LineChart;


import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
interface ChartData {
  [key: string]: number;
}

interface Props {
  data: ChartData;
}

const LineChartComponent: React.FC<Props> = ({ data }) => {
  const [chartData, setChartData] = useState<[string, number][]>([]);

  useEffect(() => {
    const chartDataArray = Object.entries(data);
    setChartData(chartDataArray);
  }, [data]);

  const options = {
    colors: ["#FF5403"],
    legend: "none",
    chartArea: {
      width: "80%",
      height: "80%",
    },
    hAxis: {
      title: "Date",
      format: "MMM d",
      gridlines: { color: "#eee" },
      minorGridlines: { color: "#f5f5f5" },
      textStyle: { color: "#333" },
    },
    vAxis: {
      title: "Value",
      gridlines: { color: "#eee" },
      minorGridlines: { color: "#f5f5f5" },
      textStyle: { color: "#333" },
    },
    areaOpacity: 0.2,
    backgroundColor: { fill: "rgba(255, 84, 3, 0.2)" },
    series: {
      0: { areaOpacity: 0.2, color: "#FF5403" },
    },
  };

  return (
    <div className="px-10 py-10 border-[#EFF1F6] border rounded-md">
      <div>
        <div>
          <h1 className="text-base font-semibold text-[#131316] mb-[8px]">
            Page Views
          </h1>

          <h4 className="text-sm font-light text-[#31373D]">All time</h4>

          <h1 className="text-[48px] font-bold text-[#131316] mt-[24px] mb-[10px]">
            500
          </h1>
        </div>
      </div>
      <div>
        <Chart
          width={"100%"}
          height={"400px"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={[["Date", "Value"], ...chartData]}
          options={options}
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    </div>
  );
};

export default LineChartComponent;
