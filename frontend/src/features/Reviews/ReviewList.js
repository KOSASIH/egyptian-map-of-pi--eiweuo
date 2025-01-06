// src/features/Reviews/ReviewList.js

import React, { useEffect, useState } from 'react';
import { fetchReviews } from './ReviewService';
import ReviewForm from './ReviewForm';
import './ReviewList.css';

const ReviewList = ({ productId }) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadReviews = async () => {
            try {
                const fetchedReviews = await fetchReviews(productId);
                setReviews(fetchedReviews);
            } catch (err) {
                setError('Failed to fetch reviews');
            } finally {
                setLoading(false);
            }
        };
        loadReviews();
    }, [productId]);

    if (loading) return <div>Loading reviews...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="review-list">
            <h2>Reviews</h2>
            <ReviewForm productId={productId} onReviewAdded={setReviews} />
            {reviews.length === 0 ? (
                <p>No reviews yet.</p>
            ) : (
                reviews.map((review) => (
                    <div key={review.id} className="review-item">
                        <h3>{review.author}</h3>
                        <p>{review.content}</p>
                        <p>Rating: {review.rating} ⭐</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default ReviewList;
