import React from "react";
import { useSelector } from "react-redux";
import { selectWeather } from "../store/weather";
import { converTimeToHour } from "../util";

import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

const HourlyGraph = (props) => {
  const weather = useSelector(selectWeather);

  const hourly = weather.hourly.map((hour) => ({
    ...hour,
    dt: converTimeToHour(hour.dt),
  }));

  return (
    <div>
      <h1>Hourly forecast</h1>
      <LineChart
        width={600}
        height={300}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        data={hourly}
      >
        <XAxis dataKey="dt"></XAxis>
        <YAxis />
        <Tooltip></Tooltip>
        <Legend></Legend>
        <Line type="monotone" dataKey="temp"></Line>
      </LineChart>
    </div>
  );
};

export default HourlyGraph;
