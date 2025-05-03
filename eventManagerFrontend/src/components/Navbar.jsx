import React, { forwardRef } from "react";
import "../cssFiles/navbarCss.css";

const Navbar = forwardRef((props, ref) => {
  return (
    <>
      <header>
        <div className="logo">EventManager</div>
        <div className="nav-links">
          <button onClick={() => ref.current?.showModal()}>Add Event</button>
        </div>
      </header>
    </>
  );
});

export default Navbar;
