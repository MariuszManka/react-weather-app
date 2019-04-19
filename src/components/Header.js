import React from "react";
import "./css/Header.css";

const Header = props => {
  const { city, date } = props.info;

  return (
    <header className={`header ${props.class}`}>
      <h1> {city} </h1> <h4> {date} </h4>{" "}
    </header>
  );
};

export default Header;
