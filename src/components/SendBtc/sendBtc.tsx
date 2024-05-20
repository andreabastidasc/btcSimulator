import React, { useState } from 'react';

interface SendBTCProps {
    sendBTC: (address: string, amount: number, fee: number) => void;
}

const SendBTC: React.FC<SendBTCProps> = ({ sendBTC }) => {
    const [address, setAddress] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const fee = parseFloat((Math.random() * (0.0002 - 0.0001) + 0.0001).toFixed(5));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendBTC(address, parseFloat(amount), fee);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Send BTC</h2>
            <label>
                Address:
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </label>
            <label>
                Amount:
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            </label>
            <p>Network Fee: {fee} BTC</p>
            <button type="submit">Send</button>
        </form>
    );
};

export default SendBTC;
