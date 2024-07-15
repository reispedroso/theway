import React from "react";
import "./HomeRent.css";
import SelectionInputs from "../SelectionInput/SelectionInputs";

interface HomeRentProps {}

const HomeRent: React.FC<HomeRentProps> = () => {
  return (
    <div>
      <div className="homerent-container">
        <div className="homerent-title">
          <h1>Rent a vehicle</h1>
          <SelectionInputs />
        </div>
      </div>
    </div>
  );
};

export default HomeRent;
