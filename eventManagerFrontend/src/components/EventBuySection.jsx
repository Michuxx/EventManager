import React, { forwardRef, useEffect, useState } from "react";

const EventBuySection = forwardRef(({ event, handleBookTicket }, ref) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [hour, setHour] = useState("");

  useEffect(() => {
    if (event?.date) {
      const arr = event.date.split(" ");
      setDay(arr[0] || "");
      setMonth(arr[1] || "");
      setYear(arr[2] || "");
      setHour(arr[3] || "");
    }
  }, [event]);

  return (
    <div className="event-buy-section-wrapper">
      <div className="people-amount">
        <p>
          {event.people_amount}/{event.max_people_amount}
        </p>
        <img
          src="/user.png"
          alt="user"
          style={{ width: "50px", height: "auto" }}
        />
      </div>
      <section>
        <div className="date">
          <p className="day">{day}</p>
          <p className="month">
            {month} {year}
          </p>
          <p className="hour">{hour}</p>
        </div>
        <div className="title-info">
          <h3>{event.name}</h3>
          <p>{event.location}</p>
        </div>
        <div className="buy-section">
          <button
            className="buy-btn"
            onClick={() => handleBookTicket(true)}
            ref={ref}
          >
            Book Tickets!
          </button>
        </div>
      </section>
    </div>
  );
});

export default EventBuySection;
