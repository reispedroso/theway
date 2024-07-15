import React from "react";
import "./HomePage.css";
import HomeRent from "../../components/HomeComponents/HomeRent/HomeRent";
import PopularCars from "../../components/HomeComponents/PopularCars/PopularCars";
import Baseboard from "../../components/HomeComponents/Baseboard/Baseboard";
import NavBar from "../../components/HomeComponents/NavBar/NavBar";

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
