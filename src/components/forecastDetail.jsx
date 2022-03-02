import React from "react";
import { convertTimeStamp } from "./../util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WeatherIcon from "./weatherIcon";

const ForecastDetail = (props) => {
  const { dailyWeather, onCollapse } = props;

  return (
    <div className="forecast-detail">
      <div className="forecast-detail__header horizontal-group">
        <span>{convertTimeStamp(dailyWeather.dt)}</span>
        <FontAwesomeIcon onClick={onCollapse} icon="fa-solid fa-chevron-up" />
      </div>

      <div className="forecast-datail__summary-group horizontal-group">
        <WeatherIcon weather={dailyWeather.weather[0].main}></WeatherIcon>
        <span>
          <p className="forecast-datail__desc">
            {dailyWeather.weather[0].description}
          </p>
          <div>
            The high will be {dailyWeather.temp.max}°C, the low will be{" "}
            {dailyWeather.temp.min}°C
          </div>
        </span>
      </div>

      <div>
        <table className="forecast-detail__table">
          <thead>
            <tr>
              <th className="forecast-datail__cell"></th>
              <th className="forecast-datail__cell">Morning</th>
              <th className="forecast-datail__cell">Afternoon</th>
              <th className="forecast-datail__cell">Evening</th>
              <th className="forecast-datail__cell">Night</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="forecast-datail__cell">TEMPRATURE</td>
              <td className="forecast-datail__cell">
                {dailyWeather.temp.morn}°C
              </td>
              <td className="forecast-datail__cell">
                {dailyWeather.temp.day}°C
              </td>
              <td className="forecast-datail__cell">
                {dailyWeather.temp.eve}°C
              </td>
              <td className="forecast-datail__cell">
                {dailyWeather.temp.night}°C
              </td>
            </tr>
            <tr>
              <td className="forecast-datail__cell">FEELS LIKE</td>
              <td className="forecast-datail__cell">
                {dailyWeather.feels_like.morn}°C
              </td>
              <td className="forecast-datail__cell">
                {dailyWeather.feels_like.day}°C
              </td>
              <td className="forecast-datail__cell">
                {dailyWeather.feels_like.eve}°C
              </td>
              <td className="forecast-datail__cell">
                {dailyWeather.feels_like.night}°C
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ForecastDetail;
