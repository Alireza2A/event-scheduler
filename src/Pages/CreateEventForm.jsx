import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ColorStrokeBox from "../components/ColorStrokeBox";
import FormInput from "../components/FormInput";
function CreateEventForm({ onClose, onSave }) {
    const [photo, setPhoto] = useState(null);
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [location, setLocation] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [errorMessage, setErrorMessage] = useState(""); // State to hold error message
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !details.trim() || !location.trim()) {
            setErrorMessage("All fields are required except for the image upload.");
            return;
        }

        setErrorMessage(""); // Clear the error message if all required fields are filled
        const currentDate = startDate.toISOString();
        const newEvent = { title, description: details, date: currentDate, location };
        onSave(newEvent);
        onClose(); // Closes modal after saving
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent">
            <ColorStrokeBox>
                <h2 className="text-xl font-bold mb-4">Create New Event</h2>
                <form onSubmit={handleSubmit} className="text-white flex flex-col gap-4">
                    {/* Image Upload */}
                    <FormInput type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} />
                    {/* Title */}
                    <FormInput type="text" placeholder="Add Event Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    {/* Event Details */}
                    <textarea
                        placeholder="Add your Event Details"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        className="p-2 rounded bg-green-950 bg-opacity-40 placeholder-white resize-none overflow-hidden"
                        rows="3"
                        style={{ minHeight: "50px" }}
                        onInput={(e) => {
                            e.target.style.height = "auto"; // Reset height before measuring
                            e.target.style.height = `${Math.max(e.target.scrollHeight, 50)}px`; // Ensure min height
                        }}
                    />
                    {/* Full Address Field */}
                    <FormInput type="text" placeholder="Add Location (Street, City, ZIP, Country)" value={location} onChange={(e) => setLocation(e.target.value)} style={{ width: "100%", maxWidth: "75ch" }} />
                    {/* Start and End Date Range Picker */}
                    <div className="flex gap-4">
                        <div>
                            <p className="text-left">Start time</p>
                            <div className="w-full">
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    className="p-2 bg-green-950 bg-opacity-40 rounded w-full"
                                    dateFormat="dd/MM/yyyy hh:mm aa"
                                    showTimeSelect
                                    timeFormat="hh:mm aa"
                                    timeIntervals={15}
                                    placeholderText="Start Date & Time"
                                />
                            </div>
                        </div>
                        <div>
                            <p className="text-left">End time</p>
                            <div className="w-full">
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    className="p-2 bg-green-950 bg-opacity-40 rounded w-full"
                                    dateFormat="dd/MM/yyyy hh:mm aa"
                                    showTimeSelect
                                    timeFormat="hh:mm aa"
                                    timeIntervals={15}
                                    placeholderText="End Date & Time"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Validation Message */}
                    {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
                    {/* Buttons */}
                    <div className="flex justify-center gap-2">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded text-[#27450D]">
                            Cancel
                        </button>
                        <button type="submit" className="btn bg-[#27450D] bg-opacity-70 text-white">
                            Submit
                        </button>
                    </div>
                </form>
            </ColorStrokeBox>
        </div>
    );
}
export default CreateEventForm;
