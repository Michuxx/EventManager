import React from "react";
import Navbar from "./Navbar";
import AllEventsPage from "./AllEventsPage";

const HomePage = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="events-wrapper">
        <AllEventsPage />
      </div>
    </div>
  );
};

export default HomePage;
