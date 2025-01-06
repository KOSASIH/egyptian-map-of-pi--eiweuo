// src/features/ARShopping/ARViewer.js

import React, { useEffect } from 'react';
import * as THREE from 'three';
import { ARButton } from 'three/examples/jsm/webxr/ARButton';
import './ARViewer.css';

const ARViewer = ({ product, onClose }) => {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        document.body.appendChild(ARButton.createButton(renderer));

        const geometry = new THREE.BoxGeometry(1, 1, 1); // Placeholder for product model
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        const animate = function () {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            document.body.removeChild(renderer.domElement);
        };
    }, [product]);

    return (
        <div className="ar-viewer">
            <button className="close-button" onClick={onClose}>Close AR</button>
            {/* AR content will be rendered here */}
        </div>
    );
};

export default ARViewer;
