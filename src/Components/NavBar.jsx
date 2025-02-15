import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";
import Favorites from "../Pages/Favorites";
import Home from "../Pages/Home";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movie App</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-links">
          Home
        </Link>
        <Link to="/Favorites" className="nav-links">
          Favourites
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
