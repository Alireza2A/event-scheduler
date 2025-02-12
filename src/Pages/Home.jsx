import { useState } from "react";
import { useOutletContext, Navigate } from "react-router";
import CreateEventForm from "./CreateEventForm";
import EventCard from "../components/EventCard"; 


function Home({ id }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { signedIn } = useOutletContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveEvent = (newEvent) => {
    setEvents([...events, { id: Date.now(), ...newEvent }]);
  };

  if (!signedIn) return <Navigate to="/signin" />;

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">My Events</h1>
      {loading ? (
        <div>Loading events...</div>
      ) : events.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center mt-10">
          <h2 className="text-xl font-semibold text-gray-600">It looks a bit sleepy here.</h2>
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition"
          >
            ➕ Create Event
          </button>
          <h3 className="mt-2 text-lg text-gray-500">Add your first Event</h3>
        </div>
      )}

      {isModalOpen && (
        <CreateEventForm onClose={() => setIsModalOpen(false)} onSave={handleSaveEvent} />
      )}
    </div>
  );
}

export default Home;
