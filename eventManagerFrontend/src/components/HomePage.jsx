import React, { useRef } from "react";
import Navbar from "./Navbar";
import AllEventsPage from "./AllEventsPage";
import AddEventDialog from "./AddEventDialog";

const HomePage = () => {
  const addDialogRef = useRef(null);

  return (
    <div className="container">
      <Navbar ref={addDialogRef} />
      <AddEventDialog ref={addDialogRef} />
      <div className="events-wrapper">
        <AllEventsPage />
      </div>
    </div>
  );
};

export default HomePage;
