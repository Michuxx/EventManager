import React from "react";
import "../cssFiles/eventPageCss.css";

const EventPage = ({ title, date, location, description }) => {
  return (
    <>
      <div class="event-card">
        <h2>{title}</h2>
        <p class="meta">📅 {date}</p>
        <p class="location">{location}</p>
        <p class="description">{description}</p>
        <div class="buttons">
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </div>
      </div>
    </>
  );
};

export default EventPage;
