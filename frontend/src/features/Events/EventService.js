// src/features/Events/EventService.js

const API_BASE_URL = '/api/events'; // Adjust this to your actual API base URL

export const fetchEvents = async () => {
    const response = await fetch(API_BASE_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Add authorization headers if needed
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch events');
    }
    const data = await response.json();
    return data.events;
};

export const fetchEventDetails = async (eventId) => {
    const response = await fetch(`${API_BASE_URL}/${eventId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Add authorization headers if needed
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch event details');
    }
    const data = await response.json();
    return data.event;
};
