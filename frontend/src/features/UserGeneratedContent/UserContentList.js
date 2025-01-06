// src/features/UserGeneratedContent/UserContentList.js

import React, { useEffect, useState } from 'react';
import { fetchUser Content } from './User ContentService';
import UserContentForm from './User ContentForm';
import './User ContentList.css';

const UserContentList = () => {
    const [userContent, setUser Content] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadUser Content = async () => {
            try {
                const fetchedContent = await fetchUser Content();
                setUser Content(fetchedContent);
            } catch (err) {
                setError('Failed to fetch user-generated content');
            } finally {
                setLoading(false);
            }
        };
        loadUser Content();
    }, []);

    const handleContentAdded = (newContent) => {
        setUser Content((prevContent) => [...prevContent, newContent]);
    };

    if (loading) return <div>Loading user-generated content...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="user-content-list">
            <h2>User Generated Content</h2>
            <User ContentForm onContentAdded={handleContentAdded} />
            {userContent.length === 0 ? (
                <p>No user-generated content available.</p>
            ) : (
                <ul>
                    {userContent.map((content) => (
                        <li key={content.id}>
                            <h3>{content.title}</h3>
                            <p>{content.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserContentList;
