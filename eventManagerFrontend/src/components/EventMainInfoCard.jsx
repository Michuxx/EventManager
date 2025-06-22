const EventMainInfoCard = ({ event, handleScrollToBottom }) => {
  return (
    <div className="event-card-details">
      <div className="background-event-image">
        <img
          src={`http://localhost:8000/media/images/${event.image}`}
          alt="main-image"
        />
        <div className="event-main-info">
          <h1>{event.name}</h1>
          <p>{event.short_description}</p>
          <p>{event.date}</p>
          <button className="buy-btn" onClick={handleScrollToBottom}>
            Book Tickets!
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventMainInfoCard;
