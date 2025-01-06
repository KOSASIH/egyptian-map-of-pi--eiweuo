// src/features/ARShopping/ARShopping.js

import React, { useEffect, useState } from 'react';
import { fetchProducts } from './ARService';
import ARViewer from './ARViewer';
import './ARShopping.css';

const ARShopping = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showAR, setShowAR] = useState(false);

    useEffect(() => {
        const loadProducts = async () => {
            const productList = await fetchProducts();
            setProducts(productList);
        };
        loadProducts();
    }, []);

    const handleARLaunch = (product) => {
        setSelectedProduct(product);
        setShowAR(true);
    };

    const handleCloseAR = () => {
        setShowAR(false);
        setSelectedProduct(null);
    };

    return (
        <div className="ar-shopping">
            <h2>Augmented Reality Shopping</h2>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-item">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <button onClick={() => handleARLaunch(product)}>View in AR</button>
                    </div>
                ))}
            </div>
            {showAR && <ARViewer product={selectedProduct} onClose={handleCloseAR} />}
        </div>
    );
};

export default ARShopping;
