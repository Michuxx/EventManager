import React from "react";
import Input from "./Input";

const BookTicketDialog = ({ isOpened, setIsOpened }) => {
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
          <input name="tickets" type="number" required />
        </Input>
      </aside>
    </dialog>
  );
};

export default BookTicketDialog;
