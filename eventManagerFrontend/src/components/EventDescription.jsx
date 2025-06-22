const EventDescription = ({ longDescription }) => {
  return (
    <div className="event-description">
      <h3>Information about event</h3>
      <p>{longDescription}</p>
    </div>
  );
};

export default EventDescription;
