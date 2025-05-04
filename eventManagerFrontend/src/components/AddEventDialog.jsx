import React, { forwardRef, useRef, useState } from "react";
import "../cssFiles/AddEventDialogCss.css";
import axios from "axios";

const AddEventDialog = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    short_description: "",
    long_description: "",
    date: "",
    location: "",
    max_people_amount: "",
  });

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

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

  const handleSubmit = async (e) => {
    const data = new FormData();

    for (const key in formData) {
      data.append(key, formData[key]);
    }

    data.append("image", image);

    try {
      const response = await axios
        .post("http://localhost:8000/events/upload/", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            setFormData({
              name: "",
              short_description: "",
              long_description: "",
              date: "",
              location: "",
              max_people_amount: "",
            });
            setImage(null);
            setImagePreview(null);
            fileInputRef.current.value = null;
            ref.current.close();
          }
        })
        .catch((err) => {
          console.log(err.response?.data || err.message);
        });
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

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
          <input
            name="name"
            type="text"
            placeholder="Event Title"
            onChange={handleChange}
            value={formData.name}
            required
          />
        </div>
        <div className="input-wrapper">
          <p>Short description</p>
          <textarea
            name="short_description"
            placeholder="it will be shown on all events page"
            onChange={handleChange}
            value={formData.short_description}
            required
          ></textarea>
        </div>
        <div className="input-wrapper">
          <p>Long description</p>
          <textarea
            name="long_description"
            onChange={handleChange}
            value={formData.long_description}
            placeholder="it will be shown in this specific page"
            required
          ></textarea>
        </div>
        <div className="input-wrapper">
          <p>Location</p>
          <input
            type="text"
            name="location"
            onChange={handleChange}
            value={formData.location}
            placeholder="Location"
            required
          />
        </div>
        <div className="input-wrapper">
          <p>Time of event</p>
          <input
            name="date"
            onChange={handleChange}
            value={formData.date}
            type="datetime-local"
            required
          />
        </div>
        <div className="input-wrapper">
          <p>Max amount of people</p>
          <input
            name="max_people_amount"
            onChange={handleChange}
            value={formData.max_people_amount}
            type="number"
            required
          />
        </div>
        <div className="input-wrapper">
          <p>Image</p>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>
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
          <button className="submit" onClick={handleSubmit}>
            Add Event
          </button>
        </div>
      </aside>
    </dialog>
  );
});

export default AddEventDialog;
