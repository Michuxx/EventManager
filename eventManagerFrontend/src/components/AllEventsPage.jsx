import React, { useEffect, useState } from "react";
import EventPage from "./EventPage";
import axios from "axios";

const AllEventsPage = () => {
  const [events, setEvents] = useState([]);

  const transformDate = (events) => {
    const transformedEvents = events.map((event) => {
      const formattedDate = new Date(event.date).toLocaleString("pl-PL", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      return {
        ...event,
        date: formattedDate,
      };
    });

    return transformedEvents;
  };

  const getAllEvents = () => {
    axios
      .get("http://localhost:8000/events/getAllEvents/")
      .then((response) => {
        const normalizedData = transformDate(response.data);
        setEvents(normalizedData);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <>
      {events.length > 0 ? (
        events.map((event) => (
          <EventPage
            key={event.id}
            title={event.name}
            date={event.date}
            location={event.location}
            description={event.short_description}
          />
        ))
      ) : (
        <p>Brak aktualnych Eventów</p>
      )}
    </>
  );
};

export default AllEventsPage;
