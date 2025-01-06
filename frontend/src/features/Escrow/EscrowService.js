// src/features/Escrow/EscrowService.js

const API_BASE_URL = '/api/escrow'; // Adjust this to your actual API base URL

export const createEscrowPayment = async ({ amount, recipient }) => {
    const response = await fetch(`${API_BASE_URL}/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, recipient }),
    });

    if (!response.ok) {
        throw new Error('Failed to create escrow payment');
    }

    const data = await response.json();
    return data; // Assuming the response contains payment details
};
