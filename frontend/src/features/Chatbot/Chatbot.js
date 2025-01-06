// src/features/Chatbot/Chatbot.js

import React, { useEffect, useState } from 'react';
import { sendMessage } from './ChatbotService';
import './Chatbot.css';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { text: input, sender: 'user' };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput('');
        setLoading(true);

        try {
            const botResponse = await sendMessage(input);
            setMessages((prevMessages) => [...prevMessages, botResponse]);
        } catch (error) {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: 'Error: Unable to get response from the chatbot.', sender: 'bot' },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="chatbot">
            <h2>Chatbot</h2>
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        <span>{msg.text}</span>
                    </div>
                ))}
                {loading && <div className="message bot">Typing...</div>}
            </div>
            <form onSubmit={handleSend} className="chat-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chatbot;
