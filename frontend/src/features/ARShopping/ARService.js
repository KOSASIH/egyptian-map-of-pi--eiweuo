// src/features/ARShopping/ARService.js

const API_BASE_URL = '/api/ar'; // Adjust this to your actual API base URL

export const fetchProducts = async () => {
    const response = await fetch(`${API_BASE_URL}/products`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Add authorization headers if needed
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data.products;
};
