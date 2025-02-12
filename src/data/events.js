// const BASE_URL = "http://localhost:3001/api/events";
import { BASE_URL } from "./EventsApiURL";

const getAllEvents = async () => {
    try {
        const res = await fetch(`${BASE_URL}/events`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (res.ok) {
            const data = await res.json();
            console.log("data", data);
            return data.results;
        }
    } catch (error) {
        console.error("Error occured while retriving all events:", error);
    }
};

const getEventById = async (eventId) => {
    try {
        const res = await fetch(`${BASE_URL}/events/${eventId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (res.ok) {
            return await res.json();
        }
    } catch (error) {
        console.error(error);
    }

    // return Array.from(allEvents).find((ev) => ev.id == eventId);
};
export { getAllEvents, getEventById };
