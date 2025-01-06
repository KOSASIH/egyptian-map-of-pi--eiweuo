// src/features/Escrow/EscrowPayment.js

import React, { useState } from 'react';
import { createEscrowPayment } from './EscrowService';
import './EscrowPayment.css';

const EscrowPayment = () => {
    const [amount, setAmount] = useState('');
    const [recipient, setRecipient] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        try {
            await createEscrowPayment({ amount, recipient });
            setSuccess(true);
            setAmount('');
            setRecipient('');
        } catch (err) {
            setError('Failed to create escrow payment. Please try again.');
        }
    };

    return (
        <div className="escrow-payment">
            <h2>Escrow Payment</h2>
            {error && <div className="error">{error}</div>}
            {success && <div className="success">Payment created successfully!</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="amount">Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="recipient">Recipient:</label>
                    <input
                        type="text"
                        id="recipient"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                        placeholder="Enter recipient's address"
                        required
                    />
                </div>
                <button type="submit">Create Escrow Payment</button>
            </form>
        </div>
    );
};

export default EscrowPayment;
