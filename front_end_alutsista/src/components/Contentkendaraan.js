import React from "react";
import "../styles/Contentkendaraan.css";
import kendaraan from "../assets/kendaraan.svg";

function Contentkendaraan() {
  return (
    <div className="content">
      <div className="kendaraan">
        <img className="logKendaraan" src={kendaraan} alt="Kendaraan Tentara" />
        <div className="buttonKendaraan">
          <a href="/" className="loginKendaraan">
            More
          </a>
        </div>
        <p>Kendaraan</p>
      </div>
    </div>
  );
}

export default Contentkendaraan;
