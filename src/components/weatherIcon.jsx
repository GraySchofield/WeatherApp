import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WeatherIcon = ({ weather }) => {
  switch (weather) {
    case "Clouds":
      return <FontAwesomeIcon icon="fa-solid fa-cloud" />;
    case "Rain":
      return <FontAwesomeIcon icon="fa-solid fa-cloud-showers-heavy" />;
    case "Clear":
      return <FontAwesomeIcon icon="fa-solid fa-sun" />;
    default:
      return <FontAwesomeIcon icon="fa-solid fa-sun" />;
  }
};

export default WeatherIcon;
