import React from "react";
import logo from "./../Assets/svg0.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex flex-col">
      {/* Navbar */}
      {/* <p className="text-3xl">Yhis is #XL</p> */}
      <NavLink to="/home">
        <img src={logo} alt="X" className="h-12" />
      </NavLink>
      <nav className="flex flex-col">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/">Explore</NavLink>
        <NavLink to="/">Notifications</NavLink>
        <NavLink to="/">Messages</NavLink>
        <NavLink to="/">Profile</NavLink>
        <NavLink to="/">Messages</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
