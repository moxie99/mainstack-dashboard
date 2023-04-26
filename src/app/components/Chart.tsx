"use client"
import { ResponsiveLine } from "@nivo/line";
import { format } from "date-fns";

const data = [
  {
    id: "data",
    data: [
      { x: "2022-07-31", y: 1 },
      { x: "2022-08-01", y: 3 },
      { x: "2022-08-02", y: 3 },
      { x: "2022-08-03", y: 7 },
      { x: "2022-08-04", y: 8 },
      { x: "2022-08-05", y: 5 },
      { x: "2022-08-06", y: 20 },
      { x: "2022-08-07", y: 50 },
      { x: "2022-08-08", y: 100 },
      { x: "2022-08-09", y: 2 },
    ],
  },
];

const Chart = () => {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "time", format: "yyyy-MM-dd", precision: "day" }}
      xFormat="time:%Y-%m-%d"
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        format: "%b %d",
        tickValues: "every day",
        legend: "Date",
        legendOffset: -12,
      }}
      axisLeft={{
        legend: "Count",
        legendOffset: 12,
      }}
      enableGridX={false}
      colors={{ scheme: "category10" }}
      lineWidth={2}
      enablePoints={true}
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default Chart;
