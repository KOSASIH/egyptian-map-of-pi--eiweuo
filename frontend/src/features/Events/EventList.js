// src/features/Events/EventList.js

import React, { useEffect, useState } from 'react';
import { fetchEvents } from './EventService';
import { Link } from 'react-router-dom';
import './EventList.css';

const EventList = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadEvents = async () => {
            try {
                const fetchedEvents = await fetchEvents();
                setEvents(fetchedEvents);
            } catch (err) {
                setError('Failed to fetch events');
            } finally {
                setLoading(false);
            }
        };
        loadEvents();
    }, []);

    if (loading) return <div>Loading events...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="event-list">
            <h2>Upcoming Events</h2>
            {events.length === 0 ? (
                <p>No upcoming events.</p>
            ) : (
                <ul>
                    {events.map((event) => (
                        <li key={event.id}>
                            <Link to={`/events/${event.id}`}>
                                <h3>{event.title}</h3>
                                <p>{event.date}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default EventList;
