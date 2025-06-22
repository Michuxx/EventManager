import React, { useState } from "react";
import Input from "./Input";
import axios from "axios";

const BookTicketDialog = ({
  isOpened,
  setIsOpened,
  eventId,
  maxAmountPeople,
}) => {
  const [tickets, setTickets] = useState(0);

  const handleSubmit = () => {
    const data = new FormData();

    if (tickets > maxAmountPeople) {
      console.log("Too many tickets!");
      return;
    }
    data.append("tickets", tickets);

    axios
      .put(`http://localhost:8000/events/book/${eventId}/`, data)
      .then((res) => {
        setIsOpened(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <dialog open={isOpened} className="add-event-dialog">
      <aside className="form-section">
        <div className="dialog-header">
          <h3>Book Tickets!</h3>
          <button aria-label="Close" onClick={() => setIsOpened(false)}>
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <Input title="How many tickets you want to buy ?">
          <input
            name="tickets"
            type="number"
            required
            onChange={(e) => setTickets(e.target.value)}
          />
        </Input>
        <div className="btn-submit-wrapper">
          <button className="submit" onClick={handleSubmit}>
            Book Tickets!
          </button>
        </div>
      </aside>
    </dialog>
  );
};

export default BookTicketDialog;
