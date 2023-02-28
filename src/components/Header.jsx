import React from "react";
import { Link } from "react-router-dom";
import "../style/header.css";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <header>
      <nav className="nav-bar">
        <div className="nav-logo">
          <img src={Logo} alt="" />
          Crypto Scout
        </div>

        <div className="nav-link">
          <ul className="nav-list">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  activeLink === "home"
                    ? "nav-item-logo active"
                    : "nav-item-logo "
                }
                onClick={() => {
                  setActiveLink("home");
                }}
              >
                <i class="uil uil-estate nav-icon"></i>Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/exchanges"
                className={
                  activeLink === "exchanges"
                    ? "nav-item-logo active"
                    : "nav-item-logo "
                }
                onClick={() => {
                  setActiveLink("exchanges");
                }}
              >
                <i class="uil uil-exchange nav-icon"></i>Exchanges
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/coins"
                className={
                  activeLink === "coins"
                    ? "nav-item-logo active"
                    : "nav-item-logo "
                }
                onClick={() => {
                  setActiveLink("coins");
                }}
              >
                <i class="uil uil-bitcoin-circle nav-icon"></i>Coins
              </Link>
            </li>

            <li className="nav-item nav-item-currency">
              <Menu>
                <MenuButton
                  as={Button}
                  colorScheme="black"
                  border={["none", "none" ,"1px solid whitesmoke"]}
                  color={"whitesmoke"}
                  // rightIcon={<ChevronDownIcon />}
                  fontSize={["1.5rem","1.5rem",".9rem"]}
                  
                >
                  <i class="uil uil-rupee-sign"></i><span className="currency-selector-title"> INR</span>
                </MenuButton>
                <MenuList bgColor={"black"} minW={["50px" ,"50px" , "80px"]} fontSize={["1.1rem","1.1rem","1rem"]} className="currency-selector">
                  <MenuItem bgColor={"black"} color={"whitesmoke"} className="currency-item">
                    <i class="uil uil-rupee-sign"></i> <span>INR</span>
                  </MenuItem>
                  <MenuItem bgColor={"black"} color={"whitesmoke"} className="currency-item">
                    <i class="uil uil-euro"></i> <span>EUR</span>
                  </MenuItem>
                  <MenuItem bgColor={"black"} color={"whitesmoke"} className="currency-item">
                    <i class="uil uil-dollar-alt"></i> <span>USD</span>
                  </MenuItem>
                </MenuList>
              </Menu>
              <span className="nav-item-span">INR</span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
