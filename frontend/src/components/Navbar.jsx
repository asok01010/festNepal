import { Link } from "react-router-dom";
import React from "react";
// import "../App.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Fest Nepal Logo" className="nav-logo" />
        FestNepal
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/festivals">Festivals</Link>
        </li>
        <li>
          <Link to="/hotels">Hotels</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li>
          <Link to="/map">Map</Link>
        </li>
      </ul>

      <button className="login-btn">
        <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
          Login
        </Link>
      </button>
    </nav>
  );
};

export default Navbar;
