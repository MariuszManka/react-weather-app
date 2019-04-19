import React from "react";
import "./css/Temperature.css";

const Temperature = props => {
  return (
    <div className={`temp ${props.class}`}>
      <h1> {props.info} &#176;C</h1>

      <h2>
        There is a <span>{props.weatherStatus}</span>
      </h2>
    </div>
  );
};

export default Temperature;
