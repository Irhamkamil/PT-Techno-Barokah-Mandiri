import React from "react";
import "../styles/Contentsenjata.css";
import senjata from "../assets/Senjata.png";

function Contentsenjata() {
  return (
    <div className="content">
      <div className="senjata">
        <img className="logSenjata" src={senjata} alt="Senjata Tentara" />
        <div className="buttonSenjata">
          <a href="/" className="loginSenjata">
            More
          </a>
        </div>
        <p>Senjata</p>
      </div>
    </div>
  );
}

export default Contentsenjata;
