import React from "react";
import "./NavBar.css";
import TheWayLogoNav from "../../../assets/HomeAssets/navbar/theway.svg";
import NavMenuLogo from "../../../assets/HomeAssets/navbar/menu.svg";

const NavBar: React.FC = () => {
  return (
    <div>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={TheWayLogoNav} alt="The Way Logo" />
        </div>
        <div className="menu">
        <img src={NavMenuLogo} alt="Nav Menu" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
