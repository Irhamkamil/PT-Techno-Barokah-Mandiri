import React from "react";
import "../styles/Content.css";
import senjata from "../assets/Senjata.png";

function Contents() {
  return (
    <div className="Content">
      <div className="senjata">
        <img className="logSenjata" src={senjata} alt="Senjata tentara" />
        <div className="buttonContent">
          <a href="/" className="login">
            More
          </a>
        </div>
        <p>Senjata</p>
      </div>
    </div>
  );
}

export default Contents;
