import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectLoading,
  selectLocations,
  loadWeather,
  selectError,
  selectWeather,
} from "../store/weather";
import Loading from "./loading";
import Summary from "./summray";
import HourlyGraph from "./hourlyGraph";
import Forecast from "./forecast";
import Map from "./map";

const Content = () => {
  const loading = useSelector(selectLoading);
  const location = useSelector(selectLocations);
  const weather = useSelector(selectWeather);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("location changed, fecth complete weather...");
    if (location) {
      dispatch(loadWeather());
    }
  }, [location]);

  const renderContent = () => {
    if (location && weather) {
      return (
        <React.Fragment>
          <Summary />
          <Map />
          <HourlyGraph />
          <Forecast />
        </React.Fragment>
      );
    } else {
      return <div>Please enter city name to search</div>;
    }
  };

  return (
    <React.Fragment>
      {loading ? (
        <Loading />
      ) : (
        <React.Fragment>
          {error && <div className="error-message">No data available</div>}

          {!error && renderContent()}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Content;
