function EventCard({ event }) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4">
        {/* Event Image */}
        <img 
          src={event.photo ? URL.createObjectURL(event.photo) : "src/assets/placeholder.png"} 
          alt={event.title} 
          className="w-full h-48 object-cover rounded-md"
        />
        
        {/* Title */}
        <h2 className="text-lg font-bold mt-2 text-green-900">{event.title}</h2>
  
        {/* Details */}
        <p className="text-gray-600 mt-1">{event.details}</p>
      </div>
    );
  }
  
  export default EventCard;