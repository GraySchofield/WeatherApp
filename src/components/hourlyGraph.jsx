import React from "react";
import { useSelector } from "react-redux";
import { selectWeather } from "../store/weather";

import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

const HourlyGraph = (props) => {
  const weather = useSelector(selectWeather);

  const renderGraph = () => {
    if (weather) {
      return (
        <LineChart
          width={600}
          height={300}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          data={weather.hourly}
        >
          <XAxis dataKey="dt"></XAxis>
          <YAxis />
          <Tooltip></Tooltip>
          <Legend></Legend>
          <Line type="monotone" dataKey="temp"></Line>
        </LineChart>
      );
    } else {
      return <div></div>;
    }
  };

  return (
    <div>
      <h1>Hourly forecast</h1>
      {renderGraph()}
    </div>
  );
};

export default HourlyGraph;
