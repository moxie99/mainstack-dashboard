"use client";

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
    backgroundColor: "rgba(255, 84, 3, 0)",
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
