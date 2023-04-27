"use client";

import Chart from "react-google-charts";

const data = {
  "2022-07-31": 1,
  "2022-08-01": 3,
  "2022-08-02": 3,
  "2022-08-03": 7,
  "2022-08-04": 8,
  "2022-08-05": 5,
  "2022-08-06": 20,
  "2022-08-07": 50,
  "2022-08-08": 100,
  "2022-08-09": 2,
};

const formatDate = (dateString: any) => {
  const date = new Date(dateString);
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();
  return `${month} ${day}`;
};

const LineChart = () => {
  // const formattedData = [["Date", "Value"]];
  // for (const [date, value] of Object.entries(data)) {
  //   formattedData.push([formatDate(date), value.toString()]);
  // }

  const formattedData = [["Date", "Value"]];
  for (const [date, value] of Object.entries(data)) {
    formattedData.push([formatDate(date), Number(value)]);
  }

  const chartStyle = {
    width: "100%",
  };

  return (
    <div className="ml-40">
      <div className="px-10 py-10 border-[#EFF1F6] border rounded-md">
      <div>
        <h1 className="text-base font-semibold text-[#131316] mb-[8px]">
          Page Views
        </h1>

        <h4 className="text-sm font-light text-[#31373D]">All time</h4>

        <h1 className="text-[48px] font-bold text-[#131316] mt-[24px] mb-[10px]">500</h1>
      </div>

      <div >
        <Chart
          style={chartStyle}
          height={"300px"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={formattedData}
          options={{
            title: "Value by Date",
            hAxis: {
              title: "Date",
              titleTextStyle: { color: "#333" },
            },
            vAxis: {
              minValue: 0,
            },
            colors: ["#FF5403"],
            series: {
              0: {
                areaOpacity: 0.3,
                areaColor: "#FF540333",
              },
            },
          }}
        />
      </div>
      </div>
    </div>
  );
};

export default LineChart;
