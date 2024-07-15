import React from "react";
import "./PopularCars.css";

import Civic from "../../../assets/HomeAssets/popularCarsImgs/civic.svg";
import StarIcon from "../../../assets/HomeAssets/popularCarsImgs/star.svg";

const PopularCars: React.FC = () => {
  return (
    <div className="popular-container">
      <h1>Month most rented car</h1>
      <div className="car-item">
        <img src={Civic} alt="Civic" className="car-img" />
        <div className="title-review">
          <h1>Honda Civic</h1>
          <img src={StarIcon} alt="" className="star-img"/>
          <h2>4.5</h2>
        </div>
      </div>
      <div className="info">
        <h2>4 doors</h2>
        <span> - </span>
        <h2>Automatic</h2>
        <span> - </span>
        <h2>2024</h2>
      </div>
    </div>
  );
};

export default PopularCars;
