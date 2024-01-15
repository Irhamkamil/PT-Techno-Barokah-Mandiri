import React from "react";
import "../styles/Logistics.css";
import Contentsenjata from "./Contentsenjata";
import Contentkendaraan from "./Contentkendaraan";

function Logistics(props) {
  return (
    <div className="Logistics">
      <header className="Logistics-header">
        <h1>{props.logHeading()}</h1>
      </header>
      <div className="isiLogistics">
        <Contentsenjata />
        <Contentkendaraan />
      </div>
    </div>
  );
}

export default Logistics;
