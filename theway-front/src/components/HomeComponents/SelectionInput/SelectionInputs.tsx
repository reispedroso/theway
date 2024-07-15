import React from "react";
import "./SelectionInputs.css";
import LocationIcon from "../../../assets/HomeAssets/selectionInputIcons/PickUpIcon.svg";
import CalendarIcon from "../../../assets/HomeAssets/selectionInputIcons/CalendarIcon.svg";
import ClockIcon from "../../../assets/HomeAssets/selectionInputIcons/TimeIcon.svg";

const SelectionInputs: React.FC = () => {
  return (
    <div>
      <div className="inputs-container">
        <div className="location">
          <div className="location-icon">
            <img src={LocationIcon} alt="Location Icon" />
          </div>
          <div className="location-input">
            <input type="text" placeholder="Choose Location" />
          </div>
        </div>
        <div className="dt-container">
          <div className="date-input">
            <div className="date-icon">
              <img src={CalendarIcon} alt="Date Icon" />
            </div>
            <input type="date" min="2024-07-01" max="2030-07-01" />
          </div>
          <div className="time-input">
            <div className="clock-icon">
              <img src={ClockIcon} alt="Clock Icon" />
            </div>
            <input type="time" />
          </div>
        </div>
      </div>
      <div className="find-vehicle-button">
        <button>Find Vehicle</button>
      </div>
    </div>
  );
};

export default SelectionInputs;
