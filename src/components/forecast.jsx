import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectWeather } from "../store/weather";
import { convertTimeStamp } from "../util";
import ForecastDetail from "./forecastDetail";

const Forecast = (props) => {
  const weather = useSelector(selectWeather);
  const [currentWeather, setCurrentWeather] = useState(null);

  const handleExpand = (current) => {
    setCurrentWeather(current);
  };

  const renderList = () => {
    if (currentWeather) {
      return (
        <ForecastDetail
          dailyWeather={currentWeather}
          onCollapse={() => {
            handleExpand(null);
          }}
        />
      );
    } else if (weather) {
      return (
        <ul>
          {weather.daily.map((dailyWeather) => {
            return (
              <li key={dailyWeather.dt}>
                <span>{convertTimeStamp(dailyWeather.dt)}</span>
                <span>
                  <img src="" alt="" />
                  {dailyWeather.temp.max} / {dailyWeather.temp.min}°C
                </span>
                <span>{dailyWeather.weather[0].description}</span>
                <span
                  onClick={() => {
                    handleExpand(dailyWeather);
                  }}
                >
                  expand
                </span>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return <div></div>;
    }
  };

  return (
    <div>
      <h1>8-day forecast</h1>
      {renderList()}
    </div>
  );
};

export default Forecast;
