import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import combinedData from "../CombinedData/data";
import periodData from "../CombinedData/period";

export default function LineChartWithGradiant() {
  const combined = combinedData;
  const period = periodData;
  const cumsumData = combined.map((item) => item.cumsum);
  const xAxisData = combined.map((item) => item.date);

  const options = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    xAxis: [
      {
        type: "category",
        splitLine: { show: false },
        axisTick: { show: false },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#374151",
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "line",
            color: "rgb(209 213 219)",
          },
        },
        data: xAxisData,
      },
    ],
    yAxis: {
      type: "value",
      axisLine: {
        show: true,
        lineStyle: {
          color: "black",
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "line",
          color: "rgb(209 213 219)",
        },
      },
    },

    // {
    //     type: "value",
    //     axisLabel: {
    //         show: false,
    //     },
    //     axisLine: {
    //         show: false,
    //     },
    //     splitLine: {
    //         show: false,
    //     },
    // },

    series: [
      {
        name: "Drawdown",
        data: cumsumData,
        type: "line",
        smooth: false,
        symbol: "none",
        markArea: {
          silent: true,
          data: period.map((p) => [
            {
              xAxis: p.Start_Date,
            },
            {
              xAxis: p.End_Date,
            },
          ]),
          itemStyle: {
            color: "rgba(255, 173, 177, 0.4)",
          },
          lineStyle: {
            color: "green",
            width: 2,
          },
        },

        lineStyle: {
          color: "gray",
          width: 2,
        },
      },
    ],
  };
  return (
    <ReactEcharts
      echarts={echarts}
      option={options}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
