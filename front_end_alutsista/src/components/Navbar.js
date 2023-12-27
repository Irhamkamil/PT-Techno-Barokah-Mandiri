import React from "react";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div>
          <img className="Logo" src={logo} alt="PT Techno Barokah Jaya" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/logistic">Logistics</a>
            </li>
          </ul>
          <div className="button">
            <a href="/login" className="login">
              Login
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
