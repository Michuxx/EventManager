import "../cssFiles/eventDetailsCss.css";
import EventBuySection from "./EventBuySection";
import EventDescription from "./EventDescription";
import EventMainInfoCard from "./EventMainInfoCard";

const EventDetails = ({ event, handleBookTicket }) => {
  if (!event) {
    return <p>Event Loading...</p>;
  }

  return (
    <>
      <EventMainInfoCard event={event} />
      <EventBuySection event={event} handleBookTicket={handleBookTicket} />
      <EventDescription longDescription={event.long_description} />
    </>
  );
};

export default EventDetails;
