import React from "react";
import { convertTimeStamp } from "./../util";

const ForecastDetail = (props) => {
  const { dailyWeather, onCollapse } = props;

  return (
    <div>
      <div>
        <span>{convertTimeStamp(dailyWeather.dt)}</span>
        <button onClick={onCollapse}>back</button>
      </div>

      <div>
        <img src="" alt="" />
        <span>
          <div>{dailyWeather.weather[0].description}</div>
          <div>
            The high will be {dailyWeather.temp.max}°C, the low will be{" "}
            {dailyWeather.temp.min}°C
          </div>
        </span>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Morning</th>
              <th>Afternoon</th>
              <th>Evening</th>
              <th>Night</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>TEMPRATURE</td>
              <td>{dailyWeather.temp.morn}°C</td>
              <td>{dailyWeather.temp.day}°C</td>
              <td>{dailyWeather.temp.eve}°C</td>
              <td>{dailyWeather.temp.night}°C</td>
            </tr>
            <tr>
              <td>FEELS LIKE</td>
              <td>{dailyWeather.feels_like.morn}°C</td>
              <td>{dailyWeather.feels_like.day}°C</td>
              <td>{dailyWeather.feels_like.eve}°C</td>
              <td>{dailyWeather.feels_like.night}°C</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ForecastDetail;
