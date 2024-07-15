import React from "react";
import "./NavBar.css";
// import TheWayLogoNav from "../../../assets/HomeAssets/navbar/theway.svg";
import NavMenuLogo from "../../../assets/HomeAssets/navbar/menu.svg";
import { Link } from "react-router-dom";
import useToggle from "../../../hooks/NavHooks/NavHook";
import { SideBarData } from "./SideBarData";

const NavBar: React.FC = () => {
  const [isOpen, showSideBar] = useToggle();

  return (
    <>
      <div className="navbar-container">
        <Link to="#" className="menu-bars">
          <div className="navbar-logo">
            <Link to="/" className="menu-bars">
              <h1>theway</h1>
            </Link>
          </div>

          <div className="menu">
            <img src={NavMenuLogo} alt="Nav Menu" onClick={showSideBar} />
          </div>
        </Link>

        <nav className={isOpen ? "nav-menu-active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars"></Link>
            </li>
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
