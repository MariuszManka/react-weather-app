import React from "react";
import "./css/Info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWind,
  faSun,
  faThermometerQuarter,
  faMoon
} from "@fortawesome/free-solid-svg-icons";

const Info = props => {
  const { sunrise, sunset, wind, pressure } = props.info;

  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

  const dayBulid = (
    <>
      <div className="line" />
      <div className={`sunrise ${props.class}`}>
        <FontAwesomeIcon icon={faSun} size="2x" className="sunriseIco" />
        <h4> sunrise </h4> <h2> {sunriseTime} </h2>{" "}
      </div>{" "}
      <div className="wind">
        <FontAwesomeIcon icon={faWind} size="2x" className="windIco" />
        <h4> wind </h4>{" "}
        <h2>
          {" "}
          {`${wind} m/s
        `}{" "}
        </h2>{" "}
      </div>{" "}
      <div className="pressure">
        {" "}
        <FontAwesomeIcon
          icon={faThermometerQuarter}
          size="2x"
          className="pressureIco"
        />{" "}
        <h4> pressure </h4> <h2>{`${pressure} hPa `}</h2>{" "}
      </div>{" "}
    </>
  );

  const nightBulid = (
    <>
      <div className="line" />
      <div className="sunrise">
        <FontAwesomeIcon icon={faSun} size="2x" className="sunriseIco" />
        <h4> sunrise </h4> <h2> {sunriseTime} </h2>{" "}
      </div>{" "}
      <div
        className={`
        wind $ {
          props.class
        }
        `}
      >
        <FontAwesomeIcon icon={faWind} size="2x" className="windIco" />
        <h4> wind </h4>{" "}
        <h2>
          {" "}
          {`
        $ {
          wind
        }
        m / s `}{" "}
        </h2>{" "}
      </div>{" "}
      <div
        className={`
        sunsetInfo $ {
          props.class
        }
        `}
      >
        {" "}
        <FontAwesomeIcon icon={faMoon} size="2x" className="moonIco" />{" "}
        <h4> sunset </h4>{" "}
        <h2>
          {" "}
          {`
        $ {
          sunsetTime
        }
        `}{" "}
        </h2>{" "}
      </div>{" "}
    </>
  );

  if (props.class === "day") {
    return <> {dayBulid} </>;
  } else {
    return <> {nightBulid} </>;
  }
};

export default Info;
