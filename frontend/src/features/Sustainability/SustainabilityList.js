// src/features/Sustainability/SustainabilityList.js

import React, { useEffect, useState } from 'react';
import { fetchSustainableProducts } from './SustainabilityService';
import './SustainabilityList.css';

const SustainabilityList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const fetchedProducts = await fetchSustainableProducts();
                setProducts(fetchedProducts);
            } catch (err) {
                setError('Failed to fetch sustainable products');
            } finally {
                setLoading(false);
            }
        };
        loadProducts();
    }, []);

    if (loading) return <div>Loading sustainable products...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="sustainability-list">
            <h2>Sustainable Products</h2>
            {products.length === 0 ? (
                <p>No sustainable products available.</p>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                            <button onClick={() => alert(`More details about ${product.name}`)}>View Details</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SustainabilityList;
