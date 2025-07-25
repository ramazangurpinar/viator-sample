import React from 'react';
import '../styles/EventItem.css';

interface EventItemProps {
  event: any;
  onClick: () => void;
}

const EventItem: React.FC<EventItemProps> = ({ event, onClick }) => {
  return (
    <li className="event-card" style={{ position: 'relative' }}>
      <h3 className="event-title">{event.eventName}</h3>
      <p className="event-info">
        <strong>Type:</strong> {event.eventType} | <strong>Date:</strong> {event.eventDate}
      </p>
      <p className="event-location">
        <strong>Location:</strong> {event.district}, {event.city}, {event.country}
      </p>
      <p className="event-price">
        <strong>Price:</strong> ${event.ticketPrice.toFixed(2)}
      </p>
      
      <button 
        className="details-button"
        onClick={(e) => {
          e.stopPropagation();  // li'nin onClick'ini tetiklememesi için
          onClick();
        }}
      >
        Details
      </button>
    </li>
  );
};

export default EventItem;
