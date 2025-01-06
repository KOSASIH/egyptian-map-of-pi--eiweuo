// src/features/LoyaltyProgram/LoyaltyService.js

const API_BASE_URL = '/api/loyalty'; // Adjust this to your actual API base URL

export const getLoyaltyPoints = async () => {
    const response = await fetch(`${API_BASE_URL}/points`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Add authorization headers if needed
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch loyalty points');
    }
    const data = await response.json();
    return data.points;
};

export const getRewards = async () => {
    const response = await fetch(`${API_BASE_URL}/rewards`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Add authorization headers if needed
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch rewards');
    }
    const data = await response.json();
    return data.rewards;
};

export const redeemReward = async (rewardId) => {
    const response = await fetch(`${API_BASE_URL}/redeem`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Add authorization headers if needed
        },
        body: JSON.stringify({ rewardId }),
    });
    if (!response.ok) {
        throw new Error('Failed to redeem reward');
    }
    return await response.json();
};
