// src/features/Recommendations/RecommendationList.js

import React, { useEffect, useState } from 'react';
import { fetchRecommendations } from './RecommendationService';
import './RecommendationList.css';

const RecommendationList = () => {
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadRecommendations = async () => {
            try {
                const fetchedRecommendations = await fetchRecommendations();
                setRecommendations(fetchedRecommendations);
            } catch (err) {
                setError('Failed to fetch recommendations');
            } finally {
                setLoading(false);
            }
        };
        loadRecommendations();
    }, []);

    if (loading) return <div>Loading recommendations...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="recommendation-list">
            <h2>Recommended for You</h2>
            {recommendations.length === 0 ? (
                <p>No recommendations available.</p>
            ) : (
                <div className="recommendation-items">
                    {recommendations.map((product) => (
                        <div key={product.id} className="recommendation-item">
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                            <button>Add to Cart</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RecommendationList;
