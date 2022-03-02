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
    <div className="horizontal-group margin-around">
      <input
        type="text"
        placeholder="Search city"
        className="input"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button className="btn btn-secondary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SeartBar;
