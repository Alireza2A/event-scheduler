import { useState } from "react";

function CreateEventForm({ onClose, onSave }) {
  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !details.trim()) return;
    
    const newEvent = { photo, title, details };
    onSave(newEvent);
    onClose(); // Schließt das Modal nach dem Speichern
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Create New Event</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Bild-Upload */}
          <input 
            type="file" 
            accept="image/*" 
            onChange={(e) => setPhoto(e.target.files[0])} 
            className="border p-2 rounded"
          />

          {/* Titel */}
          <input 
            type="text" 
            placeholder="Add Event Title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="border p-2 rounded"
          />

          {/* Details */}
          <textarea 
            placeholder="Add your Event Details" 
            value={details} 
            onChange={(e) => setDetails(e.target.value)} 
            className="border p-2 rounded"
          />

          {/* Buttons */}
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateEventForm;
