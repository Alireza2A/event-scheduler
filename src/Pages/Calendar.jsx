import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./MyCalendar.css";
import { useOutletContext, Navigate } from "react-router";
import { setSelectedDate } from "../data/localStorage";
import { getAllEvents } from "../data/events";
import EventCard from "../components/EventCard";
const MyCalendar = () => {
    const [date, setDate] = useState(new Date());
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false); // No API call yet, so set false initially
    const { signedIn } = useOutletContext();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDateChange = (newDate) => {
        setDate(newDate);
        setSelectedDate(newDate.toDateString());
        getFilterEvents();
    };
    const getFilterEvents = async () => {
        let ignore = false;
        setLoading(true);

        try {
            const events = await getAllEvents();
            setLoading(false);
            if (!ignore) {
                setEvents(events);
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        let ignore = false;
        const today = new Date();
        console.log("today", today);
        setSelectedDate(today.toDateString());
        setLoading(true);
        (async () => {
            try {
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
        <>
            <div className="flex flex-col items-center justify-start pt-8 bg-transparent">
                <h2 className="text-4xl font-bold text-green-800 mb-8">My Calendar</h2>
                <div className="shadow-lg rounded-lg">
                    <Calendar onChange={handleDateChange} value={date} className="custom-calendar" />
                </div>
                <p className="text-lg mt-4 text-gray-700">
                    Selected Date: <span className="font-bold">{date.toDateString()}</span>
                </p>
            </div>
            <div className="container mx-auto p-4 text-center">
                {loading ? (
                    <div><p>Loading events...</p></div>
                ) : events.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {events.map((event) => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center mt-10">
                        <h2 className="text-xl font-semibold text-gray-600">There is no event for this date!</h2>
                    </div>
                )}

                {isModalOpen && <CreateEventForm onClose={() => setIsModalOpen(false)} onSave={handleSaveEvent} />}
            </div>
        </>
    );
};

export default MyCalendar;
