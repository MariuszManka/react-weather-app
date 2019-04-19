import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./css/Hamburger.css";

const Hamburger = props => {
  const { isActive, click, text, change, cityChange, err } = props;
  const warning = (
    <div className="warning">
      <h1> {`Upss, nie znaleźliśmy takiego miasta, podaj inne`} </h1>{" "}
    </div>
  );
  const burger = (
    <nav className={`burger ${props.class}`}>
      <FontAwesomeIcon icon={faBars} size="2x" onClick={click} />{" "}
    </nav>
  );

  const menu = (
    <nav className={"menu"}>
      <FontAwesomeIcon
        icon={faTimes}
        size="3x"
        onClick={click}
        className="cancel"
      />
      <form onSubmit={cityChange}>
        <input
          type="text"
          className="addCity"
          placeholder="Find your City!"
          value={text}
          onChange={change}
        />{" "}
        <div className="wrapp">
          <button className={err ? `applay shake` : `applay`}> Find! </button>{" "}
        </div>{" "}
      </form>{" "}
      {err ? warning : null}{" "}
    </nav>
  );

  return <> {isActive ? menu : burger} </>;
};

export default Hamburger;
