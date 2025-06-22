import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarEditItems = ({ handleEditEvent }) => {
  let navigate = useNavigate();

  const goBackToMainPage = () => {
    navigate("/");
  };
  return (
    <div className="nav-links">
      <button className="back" onClick={goBackToMainPage}>
        <img src="/turn-back.png" alt="Go back" style={{ height: "30px" }} />
      </button>
      <button onClick={() => handleEditEvent(true)} className="edit">
        Edit
      </button>
    </div>
  );
};

export default NavbarEditItems;
