import { useState, useEffect } from "react";
import { useOutletContext, Navigate } from "react-router";
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
        <div className="container mx-auto p-4 text-center">
            <h1 className="text-2xl font-bold mb-4">My Events</h1>


            {loading ? (
                <div>Loading events...</div>
            ) : events.length > 0 ? (
                <div className="flex gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {events.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
                
                <FloatingActionButton onClick={() => setIsModalOpen(true)}/>

                </div>

            ) : (
                <div className="border flex flex-col items-center mt-10">
                    <h2 className="text-xl font-semibold text-gray-600">It looks a bit sleepy here.</h2>
                    <div className="flex flex-col items-center mt-10">
                    <FloatingActionButton onClick={() => setIsModalOpen(true)} />
                    <h3 className="mt-2 text-lg text-gray-500">Add your first Event</h3>
                    </div>
                </div>
            )}


            {isModalOpen && <CreateEventForm onClose={() => setIsModalOpen(false)} onSave={handleSaveEvent} />}
        </div>
    );
}

export default Home;
