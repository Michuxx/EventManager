import "../cssFiles/eventDetailsCss.css";
import EventBuySection from "./EventBuySection";
import EventDescription from "./EventDescription";
import EventMainInfoCard from "./EventMainInfoCard";
import { useRef } from "react";

const EventDetails = ({ event, handleBookTicket }) => {
  const bottomButtonRef = useRef(null);

  const handleScrollToBottom = () => {
    if (bottomButtonRef.current) {
      bottomButtonRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!event) {
    return <p>Event Loading...</p>;
  }

  return (
    <>
      <EventMainInfoCard
        event={event}
        handleScrollToBottom={handleScrollToBottom}
      />
      <EventBuySection
        event={event}
        handleBookTicket={handleBookTicket}
        ref={bottomButtonRef}
      />
      <EventDescription longDescription={event.long_description} />
    </>
  );
};

export default EventDetails;
