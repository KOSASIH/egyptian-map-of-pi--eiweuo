// src/features/SocialCommerce/ShareButton.js

import React from 'react';

const ShareButton = ({ post }) => {
    const handleShare = () => {
        const shareUrl = `https://www.example.com/products/${post.id}`; // Replace with actual product URL
        const shareText = `Check out this product: ${post.productName}`;
        const shareData = {
            title: post.productName,
            text: shareText,
            url: shareUrl,
        };

        if (navigator.share) {
            navigator.share(shareData)
                .then(() => console.log('Share successful'))
                .catch((error) => console.error('Error sharing:', error));
        } else {
            // Fallback for browsers that do not support the Web Share API
            alert(`Share this link: ${shareUrl}`);
        }
    };

    return (
        <button onClick={handleShare} className="share-button">
            Share
        </button>
    );
};

export default ShareButton;
