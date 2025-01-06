// src/features/UserGeneratedContent/UserContentForm.js

import React, { useState } from 'react';
import { submitUser Content } from './User ContentService';
import './User ContentForm.css';

const UserContentForm = ({ onContentAdded }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        try {
            const newContent = await submitUser Content({ title, description });
            onContentAdded(newContent);
            setSuccess(true);
            setTitle('');
            setDescription('');
        } catch (err) {
            setError('Failed to submit content. Please try again.');
        }
    };

    return (
        <form className="user-content-form" onSubmit={handleSubmit}>
            <h3>Submit Your Content</h3>
            {error && <div className="error">{error}</div>}
            {success && <div className="success">Content submitted successfully!</div>}
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value )}
                placeholder="Title"
                required
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserContentForm;
