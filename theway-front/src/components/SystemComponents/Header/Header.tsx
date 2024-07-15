import React from "react";
import BackIcon from "../../../assets/Profile/backbutton.svg";

interface HeaderProps {
    title: string;
}

const BackPreviusScreen = () => {
    window.history.back();
}

const Header:React.FC<HeaderProps> = ({title}) => {
  return (
    
    <div>
      <div className="header">
        <div className="back-button">
          <img src={BackIcon} alt="back-button-image" onClick={BackPreviusScreen}/>
        </div>
        <div className="title">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
