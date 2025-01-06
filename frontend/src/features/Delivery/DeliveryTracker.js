// src/features/Delivery/DeliveryTracker.js

import React, { useState } from 'react';
import { trackDelivery } from './DeliveryService';
import './DeliveryTracker.css';

const DeliveryTracker = () => {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [deliveryStatus, setDeliveryStatus] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleTrack = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const status = await trackDelivery(trackingNumber);
            setDeliveryStatus(status);
        } catch (err) {
            setError('Failed to track delivery. Please check your tracking number.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="delivery-tracker">
            <h2>Track Your Delivery</h2>
            <form onSubmit={handleTrack}>
                <input
                    type="text"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="Enter tracking number"
                    required
                />
                <button type="submit">Track</button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <div className="error">{error}</div>}
            {deliveryStatus && (
                <div className="delivery-status">
                    <h3>Delivery Status:</h3>
                    <p>{deliveryStatus}</p>
                </div>
            )}
        </div>
    );
};

export default DeliveryTracker;
