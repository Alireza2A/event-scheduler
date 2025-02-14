import { useState, useEffect } from "react";
import { useOutletContext, Navigate, Link } from "react-router";
import CreateEventForm from "./CreateEventForm";
import EventModal from "../components/EventModal";
import EventCard from "../components/EventCard";
import { getAllEvents } from "../data/events";
import { setSelectedDate } from "../data/localStorage";
import FloatingActionButton from "../components/FloatingActionButton";
function Home() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false); // No API call yet, so set false initially
    const { signedIn } = useOutletContext();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSaveEvent = (newEvent) => {
        setEvents([...events, { id: Date.now(), ...newEvent }]);
    };
    useEffect(() => {
        let ignore = false;
        (async () => {
            try {
                setSelectedDate("");
                setLoading(true);
                const events = await getAllEvents();
                setLoading(false);
                if (!ignore) {
                    setEvents(events);
                }
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        })();

        return () => {
            ignore = true;
        };
    }, []);

    if (!signedIn) return <Navigate to="/signin" />;

    return (
        <div className="container mx-auto pt-8 pb-8 text-center bg-transparent">
              <h2 className="text-3xl font-bold mb-8 text-green-800">My Events</h2>
            {loading ? (
                <div>Loading events...</div>
            ) : events.length > 0 ? (
                <div className="flex justify-center gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {events.map((event) => (
                        // <EventCard key={event.id} event={event} />
                        <Link key={event.id} to={`events/${event.id}`}>
                            <EventCard key={event.id} event={event} />
                        </Link>
                    ))}
                </div>
                <div className="m-12 sticky top-16 self-start">
  <FloatingActionButton onClick={() => setIsModalOpen(true)} /></div>
                </div>

            ) : (
                <div className="flex flex-col items-center mt-10">
    <h2 className="text-5xl font-semibold text-gray-600">It looks a bit sleepy here.</h2>

    <div className="flex items-center mt-10">
        {/* Image Container */}
        <div className="flex flex-col items-center mt-10">
            <img 
                src="src/assets/sleepingsloth.png" 
                className="max-h-[50vh] w-auto object-cover overflow-hidden scale-125"
                style={{ clipPath: "inset(15%)" }}
                alt="Sleeping Sloth"
            />
        </div>

        {/* Button + Text */}
        <div className="flex flex-col items-center mt-10">
            <FloatingActionButton onClick={() => setIsModalOpen(true)} />
            <h3 className="mt-6 text-nowrap text-4xl text-gray-500">Add your first Event</h3>
        </div>
    </div>
</div>

            )}

            {isModalOpen && <CreateEventForm onClose={() => setIsModalOpen(false)} onSave={handleSaveEvent} />}
        </div>
    );
}

export default Home;
