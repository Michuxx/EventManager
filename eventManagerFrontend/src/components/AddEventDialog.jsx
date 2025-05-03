import React, { forwardRef } from "react";
import "../cssFiles/AddEventDialogCss.css";

const AddEventDialog = forwardRef((props, ref) => {
  return (
    <dialog ref={ref} className="add-event-dialog">
      <aside className="form-section">
        <div className="dialog-header">
          <h3>Add New Event</h3>
          <button aria-label="Close" onClick={() => ref.current.close()}>
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="input-wrapper">
          <p>Event</p>
          <input type="text" placeholder="Event Title" required />
        </div>
        <div className="input-wrapper">
          <p>Description</p>
          <textarea placeholder="Description" required></textarea>
        </div>
        <div className="input-wrapper">
          <p>Location</p>
          <input type="text" placeholder="Location" required />
        </div>
        <div className="input-wrapper">
          <p>Time of event</p>
          <input type="datetime-local" required />
        </div>
        <div className="input-wrapper">
          <p>Image</p>
          <input type="file" />
        </div>
        <div className="btn-submit-wrapper">
          <button className="submit">Add Event</button>
        </div>
      </aside>
    </dialog>
  );
});

export default AddEventDialog;
