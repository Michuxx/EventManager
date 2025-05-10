import EventPage from "./EventPage";

const AllEventsPage = ({ events, deleteEvent }) => {
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
            image={event.image}
            currentPeople={event.people_amount}
            maxPeople={event.max_people_amount}
            deleteEvent={() => deleteEvent(event.id)}
          />
        ))
      ) : (
        <p>Brak aktualnych Eventów</p>
      )}
    </>
  );
};

export default AllEventsPage;
