function EventCard({ event }) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4">
        {/* Event-Bild */}
        <img 
          src={event.photo ? URL.createObjectURL(event.photo) : "/placeholder.jpg"} 
          alt={event.title} 
          className="w-full h-48 object-cover rounded-md"
        />
        
        {/* Titel */}
        <h2 className="text-lg font-bold mt-2">{event.title}</h2>
  
        {/* Details */}
        <p className="text-gray-600 mt-1">{event.details}</p>
      </div>
    );
  }
  
  export default EventCard;
  