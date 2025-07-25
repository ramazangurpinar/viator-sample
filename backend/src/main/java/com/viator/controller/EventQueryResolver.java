package com.viator.controller;

import com.viator.model.Event;
import com.viator.service.EventService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;
import java.util.Optional;

@Controller
public class EventQueryResolver {

    private final EventService eventService;

    public EventQueryResolver(EventService eventService) {
        this.eventService = eventService;
    }

    @QueryMapping
    public List<Event> events() {
        return eventService.getAllEvents();
    }

@QueryMapping
public List<Event> searchEvents(
    @Argument String eventName,
    @Argument String eventType,
    @Argument String eventDate,       // String, sonrasında LocalDate'ye parse edebilirsiniz
    @Argument String eventTime,       // String, sonrasında LocalTime'ya parse edebilirsiniz
    @Argument Integer maxParticipants,
    @Argument Double ticketPrice,
    @Argument String organizer,
    @Argument String description,
    @Argument String contactEmail,
    @Argument String country,
    @Argument String city,
    @Argument String district
) {
    return eventService.searchEvents(
        eventName,
        eventType,
        eventDate,
        eventTime,
        maxParticipants,
        ticketPrice,
        organizer,
        description,
        contactEmail,
        country,
        city,
        district
    );
}

    @QueryMapping
    public Event eventById(@Argument Long id) {
        Optional<Event> eventOpt = eventService.getEventById(id);
        return eventOpt.orElse(null); // Bulunamazsa null döner, GraphQL null olarak işler
    }

}
