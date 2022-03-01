import logo from "./logo.svg";
import store from "./store/store";
import SeartBar from "./components/searchBar";
import { Provider } from "react-redux";

import "./App.css";
import Summary from "./components/summray";
import Forecast from "./components/forecast";
import HourlyGraph from "./components/hourlyGraph";

function App() {
  return (
    <Provider store={store}>
      <SeartBar></SeartBar>
      <Summary />
      <HourlyGraph />
      <Forecast />
    </Provider>
  );
}

export default App;
