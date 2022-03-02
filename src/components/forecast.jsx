import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectWeather } from "../store/weather";
import { convertTimeStamp } from "../util";
import ForecastDetail from "./forecastDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WeatherIcon from "./weatherIcon";

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
    } else {
      return (
        <ul className="forecast__list">
          {weather.daily.map((dailyWeather) => {
            return (
              <li
                className="forecast__row horizontal-group"
                key={dailyWeather.dt}
              >
                <span>{convertTimeStamp(dailyWeather.dt)}</span>
                <span>
                  <WeatherIcon
                    weather={dailyWeather.weather[0].main}
                  ></WeatherIcon>
                  {Math.floor(dailyWeather.temp.max)} /{" "}
                  {Math.floor(dailyWeather.temp.min)}°C
                </span>
                <span className="forecast__desc">
                  {dailyWeather.weather[0].description}
                </span>
                <span
                  onClick={() => {
                    handleExpand(dailyWeather);
                  }}
                >
                  <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                </span>
              </li>
            );
          })}
        </ul>
      );
    }
  };

  return (
    <div className="forecast">
      <h1 className="forecast__title">8-day forecast</h1>
      {renderList()}
    </div>
  );
};

export default Forecast;
