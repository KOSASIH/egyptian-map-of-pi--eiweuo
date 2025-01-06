// src/features/Subscription/SubscriptionForm.js

import React, { useState } from 'react';
import { createSubscription } from './SubscriptionService';
import './SubscriptionForm.css';

const SubscriptionForm = () => {
    const [plan, setPlan] = useState('');
    const [paymentInfo, setPaymentInfo] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        try {
            await createSubscription({ plan, paymentInfo });
            setSuccess(true);
            setPlan('');
            setPaymentInfo('');
        } catch (err) {
            setError('Failed to create subscription. Please try again.');
        }
    };

    return (
        <div className="subscription-form">
            <h2>Subscribe to a Plan</h2>
            {error && <div className="error">{error}</div>}
            {success && <div className="success">Subscription created successfully!</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="plan">Select Plan:</label>
                    <select
                        id="plan"
                        value={plan}
                        onChange={(e) => setPlan(e.target.value)}
                        required
                    >
                        <option value="">--Select a Plan--</option>
                        <option value="basic">Basic Plan - $10/month</option>
                        <option value="premium">Premium Plan - $20/month</option>
                        <option value="pro">Pro Plan - $30/month</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="paymentInfo">Payment Information:</label>
                    <input
                        type="text"
                        id="paymentInfo"
                        value={paymentInfo}
                        onChange={(e) => setPaymentInfo(e.target.value)}
                        placeholder="Enter payment details"
                        required
                    />
                </div>
                <button type="submit">Subscribe</button>
            </form>
        </div>
    );
};

export default SubscriptionForm;
