// src/features/EducationalContent/EducationalArticle.js

import React, { useEffect, useState } from 'react';
import { fetchEducationalArticles } from './EducationalService';
import './EducationalArticle.css';

const EducationalArticle = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadArticles = async () => {
            try {
                const fetchedArticles = await fetchEducationalArticles();
                setArticles(fetchedArticles);
            } catch (err) {
                setError('Failed to fetch educational articles');
            } finally {
                setLoading(false);
            }
        };
        loadArticles();
    }, []);

    if (loading) return <div>Loading educational articles...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="educational-article">
            <h2>Educational Articles</h2>
            {articles.length === 0 ? (
                <p>No educational articles available.</p>
            ) : (
                <ul>
                    {articles.map((article) => (
                        <li key={article.id}>
                            <h3>{article.title}</h3>
                            <p>{article.summary}</p>
                            <button onClick={() => alert(`Viewing article: ${article.title}`)}>Read More</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default EducationalArticle;
