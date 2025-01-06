// src/features/UserGeneratedContent/UserContentService.js

const API_BASE_URL = '/api/user-content'; // Adjust this to your actual API base URL

export const fetchUser Content = async () => {
    const response = await fetch(`${API_BASE_URL}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Add authorization headers if needed
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch user-generated content');
    }
    const data = await response.json();
    return data.content; // Assuming the response contains a content array
};

export const submitUser Content = async (content) => {
    const response = await fetch(`${API_BASE_URL}/submit`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(content),
    });

    if (!response.ok) {
        throw new Error('Failed to submit user-generated content');
    }

    const data = await response.json();
    return data; // Assuming the response contains the submitted content details
};
