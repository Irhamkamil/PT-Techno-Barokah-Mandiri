import React from "react";
import "../styles/Logistics.css";
import Contents from "../components/Contents";

function Logistics(props) {
  return (
    <div className="Logistics">
      <header className="Logistics-header">
        <h1>{props.logHeading()}</h1>
      </header>
      <div className="isiLogistics">
        <Contents />
        <Contents />
      </div>
    </div>
  );
}

export default Logistics;
