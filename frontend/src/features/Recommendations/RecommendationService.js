// src/features/Recommendations/RecommendationService.js

const API_BASE_URL = '/api/recommendations'; // Adjust this to your actual API base URL

export const fetchRecommendations = async () => {
    const response = await fetch(API_BASE_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Add authorization headers if needed
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch recommendations');
    }
    const data = await response.json();
    return data.recommendations;
};
