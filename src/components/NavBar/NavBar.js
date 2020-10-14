import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  return (
    <div>
      <ul className="navbar">
        <li className="navbar-link">
          <NavLink exact={true} className="navbar-a" to="/home">
            Home
          </NavLink>
        </li>
        <li className="navbar-link">
          <NavLink exact={true} className="navbar-a" to="/about">
            About
          </NavLink>
        </li>
        <li className="navbar-link">
          <NavLink exact={true} className="navbar-a" to="/discovermovies">
            Discover Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
