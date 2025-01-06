// src/features/Delivery/DeliveryService.js

const API_BASE_URL = '/api/delivery'; // Adjust this to your actual API base URL

export const trackDelivery = async (trackingNumber) => {
    const response = await fetch(`${API_BASE_URL}/track`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ trackingNumber }),
    });

    if (!response.ok) {
        throw new Error('Failed to track delivery');
    }

    const data = await response.json();
    return data.status; // Assuming the response contains a status field
};
