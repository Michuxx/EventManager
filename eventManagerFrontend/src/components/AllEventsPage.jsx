import React, { useEffect, useState } from "react";
import EventPage from "./EventPage";
import axios from "axios";

const AllEventsPage = ({ events }) => {
  return (
    <>
      {events.length > 0 ? (
        events.map((event) => (
          <EventPage
            key={event.id || event.name}
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
