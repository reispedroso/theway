import React from "react";
import BlueLogo from "../../assets/mainAssets/logo2.png";
import "./SignUp.css";
import EmailIcon from "../../assets/mainAssets/emailIcon.svg";
import LockIcon from "../../assets/mainAssets/lockIcon.svg";
import UserIcon from "../../assets/mainAssets/userIcon.svg"
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-logo">
        <Link to="/">
          <img src={BlueLogo} alt="" />
        </Link>
      </div>
      <div className="create">
        <h1>Create your account</h1>
      </div>
      <div className="inputs-container">
      <div className="user">
          <div className="user-icon">
            <img src={UserIcon} alt="user Icon" />
          </div>
          <div className="user-input">
            <input type="text" placeholder="Insert your username" />
          </div>
        </div>
        <div className="email">
          <div className="email-icon">
            <img src={EmailIcon} alt="email Icon" />
          </div>
          <div className="email-input">
            <input type="text" placeholder="Insert your email" />
          </div>
        </div>
        <div className="password">
          <div className="password-icon">
            <img src={LockIcon} alt="password Icon" />
          </div>
          <div className="password-input">
            <input type="password" placeholder="Insert your password" />
          </div>
        </div>
        <div className="password">
          <div className="password-icon">
            <img src={LockIcon} alt="password Icon" />
          </div>
          <div className="password-input">
            <input type="password" placeholder="Confirm your password" />
          </div>
        </div>
        <div className="info-container">
          <div className="no-account">
            <p>
              Already have an account? <Link to="/login" className="sgn">Login</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
