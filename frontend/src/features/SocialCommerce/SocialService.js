// src/features/SocialCommerce/SocialService.js

const API_BASE_URL = '/api/social'; // Adjust this to your actual API base URL

export const fetchSocialPosts = async () => {
    const response = await fetch(`${API_BASE_URL}/posts`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Add authorization headers if needed
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch social posts');
    }
    const data = await response.json();
    return data.posts;
};
