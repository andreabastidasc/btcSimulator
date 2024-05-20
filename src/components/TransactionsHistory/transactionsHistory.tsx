import React from 'react';
import { BtcState, Transaction } from '../../typing/models';
import { useSelector } from 'react-redux';

const TransactionHistory = () => {
    const transactions = useSelector((state: BtcState) => state.transactions);

    return (
        <div>
            <h2>Transaction History</h2>
            <ul>
                {transactions.map((tx: Transaction) => (
                    <li key={tx.id}>
                        {tx.date} - {tx.amount} BTC to {tx.address} ({tx.status})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionHistory;
