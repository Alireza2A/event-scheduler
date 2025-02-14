import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { getEventById } from "../data/events";
import ColorStrokeBox from "../components/ColorStrokeBox";
import placeholderImage from "../assets/placeholder.png";

const EventModal = () => {
    const [currEvent, setCurrEvent] = useState({});
    const { eventId } = useParams();
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/home");
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
        <div className="fixed inset-0 flex items-center text-center justify-center bg-black bg-opacity-50">
            <ColorStrokeBox className="p-6 rounded-lg shadow-lg w-96">
                {currEvent ? (
                    <>
                        <h2 className="text-4xl font-bold mb-4 text-green-900">{currEvent.title}</h2>
                       
                        {/* Event Image */}
                        <img 
                            src={currEvent.photo ? URL.createObjectURL(currEvent.photo) : placeholderImage} 
                            alt={currEvent.title} 
                            className="w-full h-48 object-cover rounded-md my-4" 
                        />
                        <div className="mt-4 my-4 text-white">
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
                        <p className="text-white">{currEvent.description}</p>
                    </>
                ) : (
                    <div className="text-center text-white">
                        <h2 className="text-xl font-bold">⚠️ No Event Found</h2>
                        <p>The event you are looking for does not exist.</p>
                    </div>
                )}

                <div className="modal-action mt-4 flex justify-center">
                    <button className="btn bg-[#27450D] bg-opacity-70 text-white" onClick={handleGoBack}>
                        Close
                    </button>
                </div>
            </ColorStrokeBox>
        </div>
    );
};

export default EventModal;
