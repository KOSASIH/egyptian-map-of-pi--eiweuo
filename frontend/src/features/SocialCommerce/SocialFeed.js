// src/features/SocialCommerce/SocialFeed.js

import React, { useEffect, useState } from 'react';
import { fetchSocialPosts } from './SocialService';
import ShareButton from './ShareButton';
import './SocialFeed.css';

const SocialFeed = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const fetchedPosts = await fetchSocialPosts();
                setPosts(fetchedPosts);
            } catch (err) {
                setError('Failed to fetch social posts');
            } finally {
                setLoading(false);
            }
        };
        loadPosts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="social-feed">
            <h2>Social Commerce Feed</h2>
            {posts.map((post) => (
                <div key={post.id} className="social-post">
                    <img src={post.productImage} alt={post.productName} />
                    <h3>{post.productName}</h3>
                    <p>{post.description}</p>
                    <ShareButton post={post} />
                </div>
            ))}
        </div>
    );
};

export default SocialFeed;
