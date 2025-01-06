// src/features/Subscription/SubscriptionService.js

const API_BASE_URL = '/api/subscription'; // Adjust this to your actual API base URL

export const createSubscription = async ({ plan, paymentInfo }) => {
    const response = await fetch(`${API_BASE_URL}/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ plan, paymentInfo }),
    });

    if (!response.ok) {
        throw new Error('Failed to create subscription');
    }

    const data = await response.json();
    return data; // Assuming the response contains subscription details
};
