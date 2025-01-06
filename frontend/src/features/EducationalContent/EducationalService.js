// src/features/EducationalContent/EducationalService.js

const API_BASE_URL = '/api/educational'; // Adjust this to your actual API base URL

export const fetchEducationalArticles = async () => {
    const response = await fetch(`${API_BASE_URL}/articles`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Add authorization headers if needed
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch educational articles');
    }
    const data = await response.json();
    return data.articles; // Assuming the response contains an articles array
};
