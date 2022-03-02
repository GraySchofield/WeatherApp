import React from "react";
import store from "./store/store";
import SeartBar from "./components/searchBar";
import { Provider } from "react-redux";

import "./App.css";
import Content from "./components/content";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function App() {
  return (
    <Provider store={store}>
      <SeartBar></SeartBar>
      <div className="block-content">
        <Content />
      </div>
    </Provider>
  );
}

export default App;
