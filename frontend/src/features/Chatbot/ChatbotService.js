// src/features/Chatbot/ChatbotService.js

const API_BASE_URL = '/api/chatbot'; // Adjust this to your actual API base URL

export const sendMessage = async (message) => {
    const response = await fetch(`${API_BASE_URL}/send`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
    });

    if (!response.ok) {
        throw new Error('Failed to send message to the chatbot');
    }

    const data = await response.json();
    return { text: data.response, sender: 'bot' }; // Assuming the response structure
};
