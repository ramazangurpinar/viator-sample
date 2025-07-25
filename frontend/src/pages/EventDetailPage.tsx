import React from 'react';
import { useParams } from 'react-router-dom';
import EventDetail from '../components/EventDetail';

const EventDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  return <EventDetail eventId={id} />;
};

export default EventDetailPage;
