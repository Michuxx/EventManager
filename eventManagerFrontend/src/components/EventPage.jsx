import React from "react";
import "../cssFiles/eventPageCss.css";

const EventPage = ({
  title,
  date,
  location,
  description,
  image,
  currentPeople,
  maxPeople,
  deleteEvent,
}) => {
  return (
    <>
      <div className="event-card">
        <div className="event-wrapper">
          <aside>
            <img
              src={`http://localhost:8000/media/images/${image}`}
              alt={title}
              className="image"
            />
          </aside>
          <article>
            <h2>{title}</h2>
            <p className="meta">📅 {date}</p>
            <p className="location">
              Location: <b>{location}</b>
            </p>
            <p className="description">{description}</p>
            <div className="buttons-wrapper">
              <div className="people">
                <div className="people-info-wrapper">
                  <div className="people-info">
                    <p>Signed People:</p>
                  </div>
                  <div className="people-amount">
                    <p>
                      {currentPeople}/{maxPeople}
                    </p>
                    <img
                      src="./user.png"
                      alt="user"
                      style={{ width: "21px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="buttons">
                <button className="edit">Edit</button>
                <button className="delete" onClick={deleteEvent}>
                  Delete
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default EventPage;
