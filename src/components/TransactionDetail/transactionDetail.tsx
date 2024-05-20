import React from 'react';
import { useSelector } from 'react-redux';

import {
    BtcState,
    Transaction
} from '../../typing/models';

interface TransactionDetailProps {
    transactionId: number;
}

const TransactionDetail: React.FC<TransactionDetailProps> = ({ transactionId }) => {
    const transaction = useSelector((state: BtcState) =>
        state.transactions.find((tx: Transaction) => tx.id === transactionId)
    );

    if (!transaction) {
        return <p>Transacción no encontrada.</p>;
    }

    return (
        <div>
            <h2>Detalle de transación #{transaction.id}</h2>
            <p>ID: {transaction.id}</p>
            <p>Fecha: {transaction.date}</p>
            <p>Monto: {transaction.amount} BTC</p>
            <p>Dirección BTC: {transaction.address}</p>
            <p>Status: {transaction.status}</p>
            <p>Comisión: {transaction.fee} BTC</p>
        </div>
    );
};

export default TransactionDetail;
