import React, { useState } from "react";
import logo from "./../Assets/logo.svg";
import exploreIcon from "./../Assets/lens.svg";
import homeIcon from "./../Assets/home.svg";
import notificationIcon from "./../Assets/bell.svg";
import msgIcon from "./../Assets/msg.svg";
import profileIcon from "./../Assets/profile.svg";
import { NavLink } from "react-router-dom";
import NavContainer from "./NavContainer";

const Navbar = () => {
  const [selectedTag, setSelectedTag] = useState(0);

  return (
    <header className="flex flex-col w-2/5 px-5 pt-5">
      <NavLink to="/home" onClick={() => setSelectedTag(0)}>
        <img src={logo} alt="X" className="h-12 ml-6" />
      </NavLink>
      <nav className="flex flex-col gap-5 mt-5  justify-center">
        <NavLink to="/home" onClick={() => setSelectedTag(0)}>
          <NavContainer
            title="Home"
            icon={homeIcon}
            selected={selectedTag === 0}
          />
        </NavLink>
        <NavLink to="/" onClick={() => setSelectedTag(1)}>
          <NavContainer
            title="Explore"
            icon={exploreIcon}
            selected={selectedTag === 1}
          />
        </NavLink>
        <NavLink to="/" onClick={() => setSelectedTag(2)}>
          <NavContainer
            title="Notifications"
            icon={notificationIcon}
            selected={selectedTag === 2}
          />
        </NavLink>
        <NavLink to="/" onClick={() => setSelectedTag(3)}>
          <NavContainer
            title="Messages"
            icon={msgIcon}
            selected={selectedTag === 3}
          />
        </NavLink>
        <NavLink to="/" onClick={() => setSelectedTag(4)}>
          <NavContainer
            title="Profile"
            icon={profileIcon}
            selected={selectedTag === 4}
          />
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
