import EventPage from "./EventPage";

const AllEventsPage = ({ events, deleteEvent, passEventData }) => {
  return (
    <>
      {events.length > 0 ? (
        events.map((event) => (
          <EventPage
            key={event.id || event.name}
            id={event.id}
            title={event.name}
            date={event.date}
            location={event.location}
            description={event.short_description}
            image={event.image}
            currentPeople={event.people_amount}
            maxPeople={event.max_people_amount}
            deleteEvent={() => deleteEvent(event.id)}
            passEventData={passEventData}
          />
        ))
      ) : (
        <p>Brak aktualnych Eventów</p>
      )}
    </>
  );
};

export default AllEventsPage;
