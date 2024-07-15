import React from "react";
import "./HomePage.css";
import NavBar from "../../components/HomeComponents/NavBar/NavBar";
import HomeRent from "../../components/HomeComponents/HomeRent/HomeRent";
import PopularCars from "../../components/HomeComponents/PopularCars/PopularCars";
import Baseboard from "../../components/HomeComponents/Baseboard/Baseboard";

const HomePage: React.FC = () => {
  return (
    <div className="maincontainer">
      <NavBar />
      <HomeRent />
      <PopularCars />
      <Baseboard />
    </div>
  );
};

export default HomePage;
