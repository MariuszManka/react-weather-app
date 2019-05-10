import React from "react";
import "./css/Image.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faMoon } from "@fortawesome/free-solid-svg-icons";

const Image = props => {
  const dayBulid = (
    <div className={`image ${props.class} `}>
      <div className="firstCloud">
        <FontAwesomeIcon icon={faCloud} className="cloud" size="4x" />
      </div>{" "}
      <div className="secondCloud">
        <FontAwesomeIcon icon={faCloud} className="cloud" size="3x" />
      </div>{" "}
      <div className="sun" />
    </div>
  );

  const nightBulid = (
    <div className={`image ${props.class} `}>
      <div className="firstCloud">
        <FontAwesomeIcon icon={faCloud} className="cloud" size="5x" />
      </div>{" "}
      <div className="moon">
        <FontAwesomeIcon icon={faMoon} className="moon" size="6x" />
      </div>{" "}
      <div className="secondCloud">
        <FontAwesomeIcon icon={faCloud} className="cloud" size="4x" />
      </div>{" "}
      <div className="sun" />
    </div>
  );

  if (props.class === "day") {
    return <> {dayBulid} </>;
  } else {
    return <> {nightBulid} </>;
  }
};

export default Image;
