import React from "react";
import NavBar from "../../components/HomeComponents/NavBar/NavBar";
import Baseboard from "../../components/HomeComponents/Baseboard/Baseboard";
import BackIcon from "../../assets/Profile/backbutton.svg";
import "./Profile.css";
import DefaultUser from "../../assets/Profile/defaultusericon.svg";
import Header from "../../components/SystemComponents/Header/Header";

const Profile = () => {
  return (
    <div>
      <NavBar />
      <div className="profile-container">
        <Header title="Profile" />

        <div className="user-info">
          <div className="left">
            <div className="user-img">
              <img src={DefaultUser} alt="user-image" />
            </div>
          </div>

          <div className="right">
            <div className="user-name-email">
              <h2>Username</h2>
              <h3>johndoe@email.com</h3>
            </div>

            <div className="edit-profile-button">
              <button>Edit profile</button>
            </div>
          </div>
        </div>
        <div className="user-options">
          <li>
            <ul>Address</ul>
            <ul>Wallet</ul>
            <ul>Clear cache</ul>
            <ul>Logout</ul>
          </li>
        </div>
        <div className="button-div">
          <div className="delete-account-button">
            <button>Delete account</button>
          </div>
        </div>
      </div>
      <Baseboard />
    </div>
  );
};

export default Profile;
