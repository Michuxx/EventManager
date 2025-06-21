import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import EditEventDialog from "./EditEventDialog";
import NavbarEditItems from "./NavbarEditItems";
import axios from "axios";

const EventPage = () => {
  const [isEditOpened, setIsEditOpened] = useState(false);
  const [currentEvent, setCurrentEvent] = useState();
  const location = useLocation();
  const passedId = location.state;

  const transformDate = (event) => {
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
  };

  const getCurrentEvent = () => {
    axios
      .get(`http://localhost:8000/events/getEvent/${passedId}`)
      .then((res) => {
        const normalizedData = transformDate(res.data);
        setCurrentEvent(normalizedData);
        console.log(currentEvent);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getCurrentEvent();
  }, []);

  const handleEditEvent = (event) => {
    Swal.fire({
      toast: true,
      position: "top",
      icon: "success",
      title: "Event has been Updated!",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  };

  return (
    <>
      <div className="container">
        <Navbar>
          <NavbarEditItems handleEditEvent={setIsEditOpened} />
        </Navbar>
        {isEditOpened && (
          <EditEventDialog
            event={currentEvent}
            isOpened={isEditOpened}
            setIsOpened={setIsEditOpened}
            editEvent={handleEditEvent}
          />
        )}
      </div>
    </>
  );
};

export default EventPage;
