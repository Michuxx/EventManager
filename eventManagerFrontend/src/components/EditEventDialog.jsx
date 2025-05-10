import React, { useRef, useState } from "react";
import Input from "./Input";

const EditEventDialog = ({ event, isOpened, setIsOpened }) => {
  const [formData, setFormData] = useState(event);

  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, image: file }));

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <dialog open={isOpened} className="add-event-dialog">
      <aside className="form-section">
        <div className="dialog-header">
          <h3>Edit event</h3>
          <button aria-label="Close" onClick={() => setIsOpened(false)}>
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <Input title="Event Title">
          <input
            name="name"
            type="text"
            placeholder="Event Title"
            onChange={handleChange}
            value={formData.name}
            required
          />
        </Input>
        <Input title="Short description">
          <textarea
            name="short_description"
            placeholder="it will be shown on all events page"
            onChange={handleChange}
            value={formData.short_description}
            required
          ></textarea>
        </Input>
        <Input title="Long description">
          <textarea
            name="long_description"
            onChange={handleChange}
            value={formData.long_description}
            placeholder="it will be shown in this specific page"
            required
          ></textarea>
        </Input>
        <Input title="Location">
          <input
            type="text"
            name="location"
            onChange={handleChange}
            value={formData.location}
            placeholder="Location"
            required
          />
        </Input>
        <Input title="Time of event">
          <input
            name="date"
            onChange={handleChange}
            value={formData.date}
            type="datetime-local"
            required
          />
        </Input>
        <Input title="Max amount of people">
          <input
            name="max_people_amount"
            onChange={handleChange}
            value={formData.max_people_amount}
            type="number"
            required
          />
        </Input>
        <Input title="Image">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
          />
        </Input>
        {imagePreview && (
          <div className="image-preview-wrapper">
            <p>Podgląd:</p>
            <img
              src={imagePreview}
              alt="Podgląd"
              style={{ maxWidth: "400px" }}
            />
          </div>
        )}
        <div className="btn-submit-wrapper">
          <button className="submit">Edit Event</button>
        </div>
      </aside>
    </dialog>
  );
};

export default EditEventDialog;
