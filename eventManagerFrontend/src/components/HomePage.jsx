import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import AllEventsPage from "./AllEventsPage";
import AddEventDialog from "./AddEventDialog";
import EditEventDialog from "./EditEventDialog";
import axios from "axios";
import Swal from "sweetalert2";

const HomePage = () => {
  const [isEditOpened, setIsEditOpened] = useState(false);
  const [isAddingOpened, setIsAddingOpened] = useState(false);
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState({
    id: "",
    name: "",
    short_description: "",
    long_description: "",
    date: "",
    location: "",
    max_people_amount: "",
    image: null,
    isoDate: "",
  });

  const handleSetEventToEdit = (id) => {
    let event = events.find((e) => e.id === id);
    setEvent(event);
    setIsEditOpened(true);
    console.log(event);
  };

  const handleAddEvent = (event) => {
    let transformedEvent = transformDate([event])[0];
    setEvents((prev) => [...prev, transformedEvent]);
    Swal.fire({
      toast: true,
      position: "top",
      icon: "success",
      title: "Event has been added!",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
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

      let isoDate = new Date(event.date).toISOString().slice(0, 16);

      return {
        ...event,
        date: formattedDate,
        isoDate: isoDate,
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

  const deleteConfirm = (id) => {
    Swal.fire({
      title: "Are you sure ?!",
      text: "this operation cannot be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Delete!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteEvent(id);
        Swal.fire("Deleted!", "Event has been succesfuly deleted.", "success");
      }
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
        Swal.fire("Error!", "Something went wrong.", "error");
      });
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <div className="container">
      <Navbar setIsAddingOpened={setIsAddingOpened} />
      {isEditOpened && (
        <EditEventDialog
          event={event}
          isOpened={isEditOpened}
          setIsOpened={setIsEditOpened}
        />
      )}
      <AddEventDialog
        addEvent={handleAddEvent}
        isOpened={isAddingOpened}
        setIsOpened={setIsAddingOpened}
      />
      <div className="events-wrapper">
        <AllEventsPage
          events={events}
          deleteEvent={deleteConfirm}
          passEventData={handleSetEventToEdit}
        />
      </div>
    </div>
  );
};

export default HomePage;
