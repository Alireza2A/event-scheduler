// const BASE_URL = "http://localhost:3001/api/events";
import { BASE_URL } from "./EventsApiURL";
import { getSelectedData, getToken, getUserId } from "../data/localStorage";
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
            const allEvents = data.results;
            return filterAllEventsWithSelectedDate(allEvents);
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
function filterAllEventsWithSelectedDate(allEvents) {
    const selectedDate = getSelectedData();
    if (selectedDate === "") {
        return allEvents;
    }

    return allEvents.filter((ev) => new Date(ev.date).toDateString() == selectedDate);
}

const saveEventPersistent = async (currEvent) => {
    const token = getToken();
    const userId = Number(getUserId());
    try {
        const res = await fetch(`${BASE_URL}/events`, {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ` + token,
            },
            body: JSON.stringify({
                title: currEvent.title,
                description: currEvent.description,
                date: currEvent.date,
                location: currEvent.location,
                latitude: 0,
                longitude: 0,
                organizerId: userId,
            }),
        });

        if (res.ok) {
            console.error("event is stored in data base");
        } else {
            console.error("res status", res.status + res.statusText);
        }
    } catch (error) {
        console.error("event is not stored in data base:", error);
    }
};
export { getAllEvents, getEventById, saveEventPersistent };
