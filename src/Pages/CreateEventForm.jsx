import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateEventForm({ onClose, onSave }) {
  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !details.trim()) return;
    
    const newEvent = { photo, title, details, date };
    onSave(newEvent);
    onClose(); // Closes modal after saving
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-green-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Create New Event</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Image Upload */}
          <input 
            type="file" 
            accept="image/*" 
            onChange={(e) => setPhoto(e.target.files[0])} 
            className="border p-2 rounded"
          />

          {/* Title */}
          <input 
            type="text" 
            placeholder="Add Event Title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="border p-2 rounded"
          />

          {/* Event Details */}
          <textarea 
            placeholder="Add your Event Details" 
            value={details} 
            onChange={(e) => setDetails(e.target.value)} 
            className="border p-2 rounded"
          />

          {/* Date Picker */}
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            className="border p-2 rounded w-full"
            dateFormat="dd/MM/yyyy"
          />

          {/* Buttons */}
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
              Cancel
            </button>
            <button type="submit" className="btn bg-[#27450D] bg-opacity-70 text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateEventForm;
