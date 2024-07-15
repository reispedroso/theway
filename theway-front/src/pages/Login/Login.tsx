import React from "react";
import BlueLogo from "../../assets/mainAssets/logo2.png";
import "./Login.css";
import EmailIcon from "../../assets/mainAssets/emailIcon.svg";
import LockIcon from "../../assets/mainAssets/lockIcon.svg";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login-container">
      <div className="login-logo">
        <Link to="/">
          <img src={BlueLogo} alt="" />
        </Link>
      </div>
      <div className="welcome">
        <h1>Welcome back!</h1>
      </div>
      <div className="inputs-container">
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
        <div className="info-container">
          <div className="forget">
            <a href="/fodasekkkk">Forget password?</a>
          </div>
          <div className="no-account">
            <p>
              Don't have an account? <Link to="/register" className="sgn">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;
