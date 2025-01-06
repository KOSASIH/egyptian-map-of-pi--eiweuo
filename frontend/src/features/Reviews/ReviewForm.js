// src/features/Reviews/ReviewForm.js

import React, { useState } from 'react';
import { submitReview } from './ReviewService';
import './ReviewForm.css';

const ReviewForm = ({ productId, onReviewAdded }) => {
    const [content, setContent] = useState('');
    const [rating, setRating] = useState(5);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newReview = await submitReview({ productId, content, rating });
            onReviewAdded((prevReviews) => [...prevReviews, newReview]);
            setContent('');
            setRating(5);
        } catch (err) {
            setError('Failed to submit review');
        }
    };

    return (
        <form className="review-form" onSubmit={handleSubmit}>
            <h3>Submit a Review</h3>
            {error && <div className="error">{error}</div>}
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your review here..."
                required
            />
            <div>
                <label>Rating:</label>
                <select value={rating} onChange={(e) => setRating(e.target.value)}>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <option key={star} value={star}>{star}</option>
                    ))}
                </select>
            </div>
            <button type="submit">Submit Review</button>
        </form>
    );
};

export default ReviewForm;
