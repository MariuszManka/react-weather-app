import React, { Component } from "react";

import "./css/Hamburger.css";

class Hamburger extends Component {
  state = {
    isMenuActive: false
  };

  handleMenuClick = () => {
    this.setState(prevState => {
      return {
        isMenuActive: !prevState.isMenuActive
      };
    });
  }; //metoda która zmienia stan menu z klikniętego na nie kliknięte

  render() {
    const { isMenuActive } = this.state;
    const { text, change, cityChange, err, classN } = this.props;
    return (
      <>
        <nav className={`navigation ${classN}`}>
          <div
            className={isMenuActive ? "burger active" : "burger"}
            onClick={this.handleMenuClick}
          >
            <div className="menuBackground" />
            <span> </span>{" "}
          </div>{" "}
          <div>
            <form
              onSubmit={cityChange}
              className={isMenuActive ? "menu active" : "menu"}
            >
              <div className="group">
                <input
                  type="text"
                  required
                  className="addCity"
                  value={text}
                  onChange={change}
                />{" "}
                <span className="highlight" />
                <span className="bar" />
                <label> Find City </label>{" "}
              </div>{" "}
              <div className="wrapp">
                <button
                  className={this.props.err ? `applay shake` : `applay`}
                  onClick={this.handleMenuClick}
                >
                  {" "}
                  Find!{" "}
                </button>{" "}
              </div>{" "}
            </form>{" "}
            {err ? this.props.warning : null}{" "}
          </div>{" "}
        </nav>{" "}
      </>
    );
  }
}
export default Hamburger;
