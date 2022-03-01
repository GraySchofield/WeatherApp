import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import weatherReducer from "./weather";
import api from "./middleware/api";

export default configureStore({
  reducer: {
    weather: weatherReducer,
  },
  middleware: [...getDefaultMiddleware(), api],
});
