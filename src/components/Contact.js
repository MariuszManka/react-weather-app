import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faLinkedinIn,
  faGithub,
  faCodepen
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="Contact">
      <a
        className="fb"
        href="https://www.facebook.com/profile.php?id=100008225013845"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <FontAwesomeIcon icon={faFacebookF} />{" "}
      </a>{" "}
      <a
        className="gthub"
        href="https://github.com/MariuszManka"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />{" "}
      </a>{" "}
      <a
        className="in"
        href="https://www.linkedin.com/in/mariusz-ma%C5%84ka-b38009143/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <FontAwesomeIcon icon={faLinkedinIn} />{" "}
      </a>{" "}
      <a
        className="cdpen"
        href="https://codepen.io/mariuszmanka/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <FontAwesomeIcon icon={faCodepen} />{" "}
      </a>{" "}
    </div>
  );
};

export default Contact;
