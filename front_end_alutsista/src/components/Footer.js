import React from "react";
import "../styles/Footer.css";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSquareXTwitter,
  faLinkedin,
  faSquareFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <ul className="navFooter">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Logistics</a>
        </li>
      </ul>
      <div className="tengahFooter">
        <img className="logoFooter" src={logo} alt="PT Techno Barokah Jaya" />
        <div className="iconsFooter">
          <a href="/">
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "black" }}
              size="2xl"
            />
          </a>
          <a href="/">
            <FontAwesomeIcon
              icon={faSquareFacebook}
              style={{ color: "black" }}
              size="2xl"
            />
          </a>
          <a href="/">
            <FontAwesomeIcon
              icon={faSquareXTwitter}
              style={{ color: "black" }}
              size="2xl"
            />
          </a>
          <a href="/">
            <FontAwesomeIcon
              icon={faSquareInstagram}
              style={{ color: "black" }}
              size="2xl"
            />
          </a>
        </div>
        <div className="textLogoFooter">
          <p>© 2023 PT Techno Barokah Jaya</p>
        </div>
      </div>
      <div className="contactFooter">
        <div className="emailFooter">
          <FontAwesomeIcon icon={faEnvelope} size="xl" />
          <p>info@gmail.com</p>
        </div>
        <div className="emailFooter">
          <FontAwesomeIcon icon={faPhone} size="xl" />
          <p>000 000 0000</p>
        </div>
        <div className="emailFooter">
          <FontAwesomeIcon icon={faHouse} size="xl" />
          <p>Indonesia, INA</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
