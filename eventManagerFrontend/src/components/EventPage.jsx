import React from "react";
import "../cssFiles/eventPageCss.css";

const EventPage = ({ title, date, location, description }) => {
  return (
    <>
      <div className="event-card">
        <h2>{title}</h2>
        <p className="meta">📅 {date}</p>
        <p className="location">{location}</p>
        <p className="description">{description}</p>
        <div className="buttons">
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </div>
      </div>
    </>
  );
};

export default EventPage;
