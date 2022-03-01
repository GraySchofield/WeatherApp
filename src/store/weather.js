import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./api";
import { createSelector } from "reselect";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: {},
    loading: false,
  },

  reducers: {
    weatherRequested: (state, action) => {
      state.loading = true;
    },

    weatherRequestFailed: (state, action) => {
      state.loading = false;
    },

    locationReceived: (state, action) => {
      const data = action.payload;

      if (data.length > 0) {
        const location = {
          lat: data[0].lat,
          lon: data[0].lon,
          name: data[0].name,
          county: data[0].country,
        };

        state.data.location = location;
      }
    },

    detailWeatherReceived: (state, action) => {
      console.log("detailed weather data : ", action.payload);
      state.data.weather = { ...action.payload };
    },
  },
});

const {
  weatherRequested,
  weatherRequestFailed,
  locationReceived,
  detailWeatherReceived,
} = weatherSlice.actions;

export default weatherSlice.reducer;

//action creators
export const searchLocation = (searchString) => {
  return actions.apiCallBegan({
    baseURL:
      "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/",
    url: `geo/1.0/direct?q=${searchString}&appid=88209b55faa6c2bed08b4c436bec5d9b&limit=2`,
    method: "get",
    data: {},
    onStart: weatherRequested.type,
    onSuccess: locationReceived.type,
    onError: weatherRequestFailed.type,
  });
};

export const loadWeather = () => (dispatch, getState) => {
  const { lat, lon } = getState().weather.data.location;

  return dispatch(
    actions.apiCallBegan({
      baseURL:
        "https://cors-anywhere.herokuapp.com/https://openweathermap.org/",
      url: `data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02`,
      method: "get",
      onStart: weatherRequested.type,
      onSuccess: detailWeatherReceived.type,
      onError: weatherRequestFailed.type,
    })
  );
};

//Selectors
export const selectLocations = createSelector(
  (state) => state.weather,
  (weather) => weather.data.location
);

export const selectWeather = createSelector(
  (state) => state.weather,
  (weather) => weather.data.weather
);
