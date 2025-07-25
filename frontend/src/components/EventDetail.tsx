import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const GET_EVENT_DETAIL = gql`
  query GetEventDetail($id: ID!) {
    eventById(id: $id) {
      id
      eventName
      eventType
      eventDate
      eventTime
      maxParticipants
      ticketPrice
      organizer
      description
      contactEmail
      country
      city
      district
    }
  }
`;

interface EventDetailProps {
  eventId?: string;
}

const EventDetail: React.FC<EventDetailProps> = ({ eventId }) => {
  const { loading, error, data } = useQuery(GET_EVENT_DETAIL, {
    variables: { id: eventId },
    skip: !eventId,
  });

  if (loading) return <p>Loading event details...</p>;
  if (error) return <p>Error loading event: {error.message}</p>;
  if (!data || !data.eventById) return <p>No event found.</p>;

  const event = data.eventById;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 6,
        px: 2,
      }}
    >
      <Card sx={{ minWidth: 300, maxWidth: 600 }}>
        
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {event.eventName}
          </Typography>
          <Typography sx={{ mb: 1.5, color: 'text.secondary' }}>
            {event.eventType} | {event.eventDate} {event.eventTime}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Location: {event.district}, {event.city}, {event.country}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Participants: {event.maxParticipants}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Price: ${event.ticketPrice}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Organizer: {event.organizer}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Contact: {event.contactEmail}
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            {event.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" type="submit">
              Buy
          </Button>          
        </CardActions>
      </Card>
    </Box>
  );
};

export default EventDetail;
