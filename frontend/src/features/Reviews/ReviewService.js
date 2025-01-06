// src/features/Reviews/ReviewService.js

const API_BASE_URL = '/api/reviews'; // Adjust this to your actual API base URL

export const fetchReviews = async (productId) => {
    const response = await fetch(`${API_BASE_URL}?productId=${productId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Add authorization headers if needed
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch reviews');
    }
    const data = await response.json();
    return data.reviews;
};

export const submitReview = async ({ productId, content, rating }) => {
    const response = await fetch(`${API_BASE_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Add authorization headers if needed
        },
        body: JSON.stringify({ productId, content, rating }),
    });
    if (!response.ok) {
        throw new Error('Failed to submit review');
    }
    const data = await response.json();
    return data.review;
};
