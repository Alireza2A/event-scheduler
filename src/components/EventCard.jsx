function EventCard({ event }) {
  return (
    <div
      className="shadow-lg rounded-lg p-4 text-white"
      style={{
        background: "linear-gradient(to top, rgba(76, 122, 37, 0.95), rgba(148, 193, 121, 0.95))",
      }}
    >
      {/* Event Image */}
      <img
        src={event.photo ? URL.createObjectURL(event.photo) : "src/assets/placeholder.png"}
        alt={event.title}
        className="w-full h-48 object-cover rounded-md"
      />
      
      {/* Title */}
      <h2 className="text-lg font-bold mt-2">{event.title}</h2>

      {/* Details */}
      <p className="mt-1">{event.details}</p>
    </div>
  );
}

export default EventCard;
