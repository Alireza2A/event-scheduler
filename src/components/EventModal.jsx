import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router";
import { getEventById } from "../data/events";

const EventModal = () => {
    const [currEvent, setCurrEvent] = useState({});
    const { eventId } = useParams();
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/home");
    };

    const handleDelete = async () => {
        try {
            await deleteEventById(eventId); // Call your delete event function
            navigate("/home"); // Redirect to home or another page after deletion
        } catch (error) {
            console.error("Failed to delete event:", error);
        }
    };
    useEffect(() => {
        let ignore = false;
        (async () => {
            try {
                const _event = await getEventById(eventId);
                console.log("current event", _event);
                if (!ignore) {
                    setCurrEvent(_event);
                }
            } catch (error) {
                console.error(error);
            }
        })();

        return () => {
            ignore = true;
        };
    }, [eventId]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="modal-box bg-white p-6 rounded-lg shadow-lg w-96">
                {currEvent ? (
                    <>
                        <h2 className="text-xl font-bold">{currEvent.title}</h2>
                        <p className="text-gray-600">{currEvent.description}</p>

                        <div className="mt-4">
                            <p>
                                <strong>📍 Location:</strong> {currEvent.location}
                            </p>
                            <p>
                                <strong>📅 Date:</strong> {new Date(currEvent.date).toLocaleString()}
                            </p>
                            <p>
                                <strong>🆔 Organizer ID:</strong> {currEvent.organizerId}
                            </p>
                            <p>
                                <strong>🕒 Created At:</strong> {new Date(currEvent.createdAt).toLocaleString()}
                            </p>
                            <p>
                                <strong>🔄 Updated At:</strong> {new Date(currEvent.updatedAt).toLocaleString()}
                            </p>
                        </div>
                    </>
                ) : (
                    <div className="text-center">
                        <h2 className="text-xl font-bold">⚠️ No Event Found</h2>
                        <p className="text-gray-600">The event you are looking for does not exist.</p>
                    </div>
                )}

                <div className="modal-action mt-4">
                    <button className="btn btn-primary" onClick={handleGoBack}>
                        Close
                    </button>
                    <button className="btn btn-danger" onClick={handleDelete}>
                        Delete Event
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventModal;
