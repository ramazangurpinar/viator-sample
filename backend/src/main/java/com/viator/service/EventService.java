package com.viator.service;

import com.viator.model.Event;
import com.viator.repository.EventRepository;

import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    private final EventRepository eventRepository;

    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }
    
    public List<Event> searchEvents(
        String eventName,
        String eventType,
        String eventDateStr,
        String eventTimeStr,
        Integer maxParticipants,
        Double ticketPrice,
        String organizer,
        String description,
        String contactEmail,
        String country,
        String city,
        String district
    ) {
        Specification<Event> spec = (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (eventName != null && !eventName.isEmpty()) {
                predicates.add(cb.like(cb.lower(root.get("eventName")), "%" + eventName.toLowerCase() + "%"));
            }
            if (eventType != null && !eventType.isEmpty()) {
                predicates.add(cb.equal(root.get("eventType"), eventType));
            }
            if (eventDateStr != null && !eventDateStr.isEmpty()) {
                LocalDate eventDate = LocalDate.parse(eventDateStr);
                predicates.add(cb.equal(root.get("eventDate"), eventDate));
            }
            if (eventTimeStr != null && !eventTimeStr.isEmpty()) {
                LocalTime eventTime = LocalTime.parse(eventTimeStr);
                predicates.add(cb.equal(root.get("eventTime"), eventTime));
            }
            if (maxParticipants != null) {
                predicates.add(cb.equal(root.get("maxParticipants"), maxParticipants));
            }
            if (ticketPrice != null) {
                predicates.add(cb.equal(root.get("ticketPrice"), ticketPrice));
            }
            if (organizer != null && !organizer.isEmpty()) {
                predicates.add(cb.like(cb.lower(root.get("organizer")), "%" + organizer.toLowerCase() + "%"));
            }
            if (description != null && !description.isEmpty()) {
                predicates.add(cb.like(cb.lower(root.get("description")), "%" + description.toLowerCase() + "%"));
            }
            if (contactEmail != null && !contactEmail.isEmpty()) {
                predicates.add(cb.equal(cb.lower(root.get("contactEmail")), contactEmail.toLowerCase()));
            }
            if (country != null && !country.isEmpty()) {
                predicates.add(cb.equal(root.get("country"), country));
            }
            if (city != null && !city.isEmpty()) {
                predicates.add(cb.equal(root.get("city"), city));
            }
            if (district != null && !district.isEmpty()) {
                predicates.add(cb.equal(root.get("district"), district));
            }

            return cb.and(predicates.toArray(new Predicate[0]));
        };

        return eventRepository.findAll(spec);
    }

    public Optional<Event> getEventById(Long id) {
        return eventRepository.findById(id);
    }

}
