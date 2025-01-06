// src/features/Gamification/GamificationDashboard.js

import React, { useEffect, useState } from 'react';
import { fetchUserProgress } from './GamificationService';
import './GamificationDashboard.css';

const GamificationDashboard = () => {
    const [progress, setProgress] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProgress = async () => {
            try {
                const userProgress = await fetchUserProgress();
                setProgress(userProgress);
            } catch (err) {
                setError('Failed to fetch user progress');
            } finally {
                setLoading(false);
            }
        };
        loadProgress();
    }, []);

    if (loading) return <div>Loading your progress...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="gamification-dashboard">
            <h2>Your Gamification Dashboard</h2>
            <div className="points">
                <h3>Points: {progress.points}</h3>
            </div>
            <div className="achievements">
                <h3>Achievements</h3>
                <ul>
                    {progress.achievements.map((achievement) => (
                        <li key={achievement.id}>
                            {achievement.name} - {achievement.completed ? '✅' : '❌'}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="progress">
                <h3>Progress</h3>
                <p>{progress.progressPercentage}% completed</p>
                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{ width: `${progress.progressPercentage}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default GamificationDashboard;
