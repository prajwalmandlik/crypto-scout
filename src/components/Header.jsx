import React from "react";
import { Link } from "react-router-dom";
import "../style/header.css";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <nav className="nav-bar">
        <div className="nav-logo">
          <img src={Logo} alt="" />Crypto Scout
        </div>

        <div className="nav-link">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-item-logo"><i class="uil uil-estate nav-icon"></i>Home</Link>
            </li>

            <li className="nav-item">
              <Link to="/exchanges" className="nav-item-logo"><i class="uil uil-exchange nav-icon"></i>Exchanges</Link>
            </li>

            <li className="nav-item">
              <Link to="/coins" className="nav-item-logo"><i class="uil uil-bitcoin-circle nav-icon"></i>Coins</Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-item-logo"><i class="uil uil-user nav-icon"></i>About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
