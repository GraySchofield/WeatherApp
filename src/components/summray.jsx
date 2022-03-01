import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectLocations, selectWeather, loadWeather } from "../store/weather";
import { convertTimeStamp } from "../util";

const Summary = (props) => {
  const dispatch = useDispatch();
  const location = useSelector(selectLocations);
  const weather = useSelector(selectWeather);

  useEffect(() => {
    console.log("location changed, fecth complete weather...");
    if (location) {
      dispatch(loadWeather());
    }
  }, [location]);

  const renderContent = () => {
    if (location && weather) {
      const { current } = weather;

      return (
        <div>
          <header>
            <p> {convertTimeStamp(current.dt)} </p>
            <h1>
              {location.name}, {location.county}
            </h1>
          </header>

          <main>
            <div>
              <div>
                Feels like {current.feels_like}°C.
                <p>{current.weather[0].description}</p>
              </div>
              <div>
                <span>
                  <img src="" alt="" />
                  <h1>{current.temp}°C</h1>
                </span>

                <span> | </span>

                <span>
                  <div>
                    <span>{current.wind_speed}m/s NNE </span>
                    <span>{current.pressure}hPa </span>
                    <span>Humidity{current.humidity}% </span>
                  </div>
                  <div>
                    <span>UV:{current.uvi} </span>
                    <span>Dew point:{current.dew_point}°C </span>
                    <span>Visibility:{current.visibility}km </span>
                  </div>
                </span>
              </div>
            </div>
          </main>
        </div>
      );
    } else {
      return <div>Please enter city name to search</div>;
    }
  };

  return <React.Fragment>{renderContent()}</React.Fragment>;
};

export default Summary;
