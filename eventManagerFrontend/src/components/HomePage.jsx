import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import AllEventsPage from "./AllEventsPage";
import AddEventDialog from "./AddEventDialog";
import axios from "axios";

const HomePage = () => {
  const addDialogRef = useRef(null);

  const [events, setEvents] = useState([]);

  const handleAddEvent = (event) => {
    let transformedEvent = transformDate([event])[0];
    setEvents((prev) => [...prev, transformedEvent]);
    console.log(events);
  };

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

  const deleteEvent = (id) => {
    axios
      .delete(`http://localhost:8000/events/delete/${id}/`)
      .then((response) => {
        setEvents((events) => events.filter((e) => e.id !== id));
        console.log("event has been deleted. " + response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <div className="container">
      <Navbar ref={addDialogRef} />
      <AddEventDialog ref={addDialogRef} addEvent={handleAddEvent} />
      <div className="events-wrapper">
        <AllEventsPage events={events} deleteEvent={deleteEvent} />
      </div>
    </div>
  );
};

export default HomePage;
