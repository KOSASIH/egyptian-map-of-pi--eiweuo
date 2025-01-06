// src/features/Events/EventDetail.js

import React, { useEffect, useState } from 'react';
import { fetchEventDetails } from './EventService';
import { useParams } from 'react-router-dom';
import './EventDetail.css';

const EventDetail = () => {
    const { eventId } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadEventDetails = async () => {
            try {
                const fetchedEvent = await fetchEventDetails(eventId);
                setEvent(fetchedEvent);
            } catch (err) {
                setError('Failed to fetch event details');
            } finally {
                setLoading(false);
            }
        };
        loadEventDetails();
    }, [eventId]);

    if (loading) return <div>Loading event details...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="event-detail">
            <h2>{event.title}</h2>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
            <p>Description: {event.description}</p>
            <button onClick={() => alert('RSVP functionality to be implemented!')}>RSVP</button>
        </div>
    );
};

export default EventDetail;
