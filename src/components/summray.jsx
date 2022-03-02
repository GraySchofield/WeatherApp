import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectLocations, selectWeather, loadWeather } from "../store/weather";
import { convertTimeStamp } from "../util";
import WeatherIcon from "./weatherIcon";

const Summary = (props) => {
  const dispatch = useDispatch();
  const location = useSelector(selectLocations);
  const weather = useSelector(selectWeather);

  const { current } = weather;
  return (
    <React.Fragment>
      <div className="summary">
        <header>
          <p className="label-primary"> {convertTimeStamp(current.dt)} </p>
          <h1 className="summaray__title title-major">
            {location.name}, {location.county}
          </h1>
        </header>

        <main>
          <div>
            <div className="summary__note horizontal-group  seperate-column label-bold">
              Feels like {Math.floor(current.feels_like)}°C.
              <p className="label-bold">{current.weather[0].description}</p>
            </div>
            <div className="summary__content horizontal-group seperate-column">
              <span className="summray__icon-group">
                <WeatherIcon weather={current.weather[0].main}></WeatherIcon>
                <h1>{Math.floor(current.temp)}°C</h1>
              </span>
              |
              <span>
                <div>
                  <span className="weather-note">
                    {current.wind_speed}m/s NNE{" "}
                  </span>
                  <span className="weather-note">{current.pressure}hPa </span>
                  <span className="weather-note">
                    Humidity{current.humidity}%{" "}
                  </span>
                </div>
                <div>
                  <span className="weather-note">UV:{current.uvi} </span>
                  <span className="weather-note">
                    Dew point:{current.dew_point}°C{" "}
                  </span>
                  <span className="weather-note">
                    Visibility:{current.visibility}km{" "}
                  </span>
                </div>
              </span>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default Summary;
