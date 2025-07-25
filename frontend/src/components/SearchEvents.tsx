import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { gql, useLazyQuery } from '@apollo/client';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';

import EventItem from './EventItem';

import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Button, Grid, TextField } from '@mui/material';
import CenteredTitle from './CenteredTitle';
import { eventTypes } from '../types/EventType';

const SEARCH_EVENTS = gql`
  query SearchEvents($city: String, $eventDate: String, $eventType: String) {
    searchEvents(city: $city, eventDate: $eventDate, eventType: $eventType) {
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

function useQueryParams() {
  return new URLSearchParams(useLocation().search);
}

interface FormFilters {
  city: string;
  eventType: { value: string; label: string } | null;
  eventDate: Date | null;
}

const SearchEvents = () => {
  const query = useQueryParams();
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<FormFilters>({
    defaultValues: {
      city: query.get('where') || '',
      eventType: null,
      eventDate: query.get('when') ? new Date(query.get('when')!) : null,
    },
  });

  const [searchEvents, { loading, data, error }] = useLazyQuery(SEARCH_EVENTS);

  const onSubmit = (formData: FormFilters) => {
    searchEvents({
      variables: {
        city: formData.city,
        eventType: formData.eventType?.value || '',
        eventDate: formData.eventDate
          ? formData.eventDate.toISOString().slice(0, 10)
          : '',
      },
    });
  };

  const handleDetails = (id: string) => {
    navigate(`/event/${id}`);
  };

  return (
    <div style={{ padding: '24px' }}>
      <CenteredTitle title="Events" />

      <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: '20px' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid size={{ xs: 12, md: 4 }}>
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="City"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              )}
            />
          </Grid>

          
          <Grid size={{ xs: 12, md: 4 }}>
            <Controller
              name="eventType"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={eventTypes}
                  isClearable
                  placeholder="Event Type"
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Controller
                name="eventDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    label="Event Date"
                    value={field.value}
                    onChange={field.onChange}
                    slotProps={{
                      textField: { size: 'small', fullWidth: true },
                    }}
                  />
                )}
              />
            </LocalizationProvider>
          </Grid>

          <Grid size={{ xs: 12, md: 12 }}>
            <Button variant="contained" type="submit">
              Search
            </Button>
          </Grid>
        </Grid>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      {data?.searchEvents && data.searchEvents.length === 0 && <p>No events found</p>}

      <ul className="event-list" style={{ padding: 0, listStyle: 'none' }}>
        {data?.searchEvents?.map((event: any) => (
          <EventItem
            key={event.id}
            event={event}
            onClick={() => handleDetails(event.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default SearchEvents;
