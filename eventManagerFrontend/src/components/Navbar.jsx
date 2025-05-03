import React from "react";
import "../cssFiles/navbarCss.css";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="logo">EventManager</div>
        <div className="nav-links">
          <a href="">Home</a>
          <a href="">Add Event</a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
