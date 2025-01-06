// src/features/Sustainability/SustainabilityService.js

const API_BASE_URL = '/api/sustainability'; // Adjust this to your actual API base URL

export const fetchSustainableProducts = async () => {
    const response = await fetch(`${API_BASE_URL}/products`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Add authorization headers if needed
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch sustainable products');
    }
    const data = await response.json();
    return data.products; // Assuming the response contains a products array
};
