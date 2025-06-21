import "../cssFiles/eventDetailsCss.css";
import EventBuySection from "./EventBuySection";
import EventMainInfoCard from "./EventMainInfoCard";

const EventDetails = ({ event }) => {
  if (!event) {
    return <p>Event Loading...</p>;
  }

  return (
    <>
      <EventMainInfoCard event={event} />
      <EventBuySection event={event} />
    </>
  );
};

export default EventDetails;
