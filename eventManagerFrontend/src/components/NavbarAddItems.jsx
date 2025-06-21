import React from "react";

const NavbarAddItems = ({ setIsAddingOpened }) => {
  return (
    <div className="nav-links">
      <button onClick={() => setIsAddingOpened(true)}>Add Event</button>
    </div>
  );
};

export default NavbarAddItems;
