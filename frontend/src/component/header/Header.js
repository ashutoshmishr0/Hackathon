import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../Page/image/logo.png";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="start">
          <img className="h-12" src={logo} alt="image"></img>
        </div>
        <div className="mid">
          <Link to="/">
            <button className="mid-button">Home</button>
          </Link>
          <Link to="/aboutus">
            <button className="mid-button">About Us</button>
          </Link>
          <button className="mid-button">Training</button>
          <Link to={"/Services"}>
            <button className="mid-button">Services</button>
          </Link>
          <Link to="/Contact">
            <button className="mid-button">Contact</button>
          </Link>
        </div>
        <div className="last">
          <Link to="/login">
            <button className="last-button bg-blue-600 text-white">
              Log In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
