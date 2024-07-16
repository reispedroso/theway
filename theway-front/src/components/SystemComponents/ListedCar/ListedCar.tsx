import React from "react";
import MyImage from "../Image/MyImage";

const ListedCar: React.FC = () => {
  return <>
    <div className="listed-container">
        <div className="listed-image">
            {/* <MyImage src="../" alt="car" className="listed-image" /> */}
        </div>
        <div className="listed-description">
            <h3>Car name</h3>
            <p>Car description</p>
        </div>
        <div className="listed-price">
            <h3>Price</h3>
            <p>Price per day</p>
            <img src="../../../../assets/NewReservation/palio.png" alt="car" />
        </div>
    </div>
  </>;
};



export default ListedCar;