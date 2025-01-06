// src/features/LoyaltyProgram/LoyaltyProgram.js

import React, { useEffect, useState } from 'react';
import { getLoyaltyPoints, getRewards, redeemReward } from './LoyaltyService';
import './LoyaltyProgram.css';

const LoyaltyProgram = () => {
    const [points, setPoints] = useState(0);
    const [rewards, setRewards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLoyaltyData = async () => {
            try {
                const userPoints = await getLoyaltyPoints();
                const availableRewards = await getRewards();
                setPoints(userPoints);
                setRewards(availableRewards);
            } catch (err) {
                setError('Failed to fetch loyalty data');
            } finally {
                setLoading(false);
            }
        };
        fetchLoyaltyData();
    }, []);

    const handleRedeem = async (rewardId) => {
        try {
            await redeemReward(rewardId);
            alert('Reward redeemed successfully!');
            // Refresh points and rewards
            const userPoints = await getLoyaltyPoints();
            const availableRewards = await getRewards();
            setPoints(userPoints);
            setRewards(availableRewards);
        } catch (err) {
            alert('Failed to redeem reward');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="loyalty-program">
            <h2>Your Loyalty Points: {points}</h2>
            <h3>Available Rewards:</h3>
            <ul>
                {rewards.map((reward) => (
                    <li key={reward.id}>
                        <span>{reward.name} - {reward.cost} points</span>
                        <button onClick={() => handleRedeem(reward.id)}>Redeem</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LoyaltyProgram;
