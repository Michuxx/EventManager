import React from "react";

const NavbarEditItems = ({ handleEditEvent }) => {
  return (
    <div className="nav-links">
      <button onClick={() => handleEditEvent(true)} className="edit">
        Edit
      </button>
    </div>
  );
};

export default NavbarEditItems;
