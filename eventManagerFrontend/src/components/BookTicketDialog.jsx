import { useState } from "react";
import Input from "./Input";
import axios from "axios";
import Swal from "sweetalert2";

const BookTicketDialog = ({
  isOpened,
  setIsOpened,
  eventId,
  maxAmountPeople,
  handleChangePeople,
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
        handleChangePeople(tickets);
        Swal.fire({
          toast: true,
          position: "top",
          icon: "success",
          title: "Bought " + tickets + " Tickets!",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      })
      .catch((err) => {
        console.log(err.message);
        Swal.fire("Error!", "Wrong number of tickets or too many tickets!");
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
