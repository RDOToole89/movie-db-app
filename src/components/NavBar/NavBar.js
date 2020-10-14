import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  return (
    <div>
      <ul className="navbar">
        <li className="navbar-link">
          <NavLink className="navbar-a" to="/home">
            Home
          </NavLink>
        </li>
        <li className="navbar-link">
          <NavLink className="navbar-a" to="/about">
            About
          </NavLink>
        </li>
        <li className="navbar-link">
          <NavLink className="navbar-a" to="/discover">
            Discover Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
