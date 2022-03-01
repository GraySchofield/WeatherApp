import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchLocation } from "../store/weather";

const SeartBar = (props) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleSearch = () => {
    dispatch(searchLocation(value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search city"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SeartBar;
