// src/features/Gamification/GamificationService.js

const API_BASE_URL = '/api/gamification'; // Adjust this to your actual API base URL

export const fetchUserProgress = async () => {
    const response = await fetch(`${API_BASE_URL}/progress`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Add authorization headers if needed
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch user progress');
    }

    const data = await response.json();
    return data; // Assuming the response contains user progress details
};
