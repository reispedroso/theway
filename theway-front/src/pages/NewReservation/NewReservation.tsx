import NavBar from "../../components/HomeComponents/NavBar/NavBar";
import Header from "../../components/SystemComponents/Header/Header";
import ListedCar from "../../components/SystemComponents/ListedCar/ListedCar";

const NewReservation = () => {
  return (
    <div>
      <NavBar />
      <Header title="Rent a car" />
      <ListedCar />
    </div>
  );
};

export default NewReservation;
