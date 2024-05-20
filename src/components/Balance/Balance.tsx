import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getExchangeRate } from '../../services/RatesService/rates.service';

interface BalanceProps {
    balance: number;
}

const Balance: React.FC<BalanceProps> = ({ balance }) => {
    const [exchangeRate, setExchangeRate] = useState<number | null>(null);

    useEffect(() => {
        const fetchExchangeRate = async () => {
            try {
                const rate = await getExchangeRate();

                const parsedRate = parseInt(rate.rates.ARS_BUY)
                setExchangeRate(parsedRate)
            } catch (error) {
                console.error('Error fetching exchange rate', error);
            }
        };

        fetchExchangeRate();
    }, []);

    const balanceInARS = exchangeRate ? (balance * exchangeRate).toFixed(2) : 'Loading...';

    return (
        <div>
            <h2>Balance</h2>
            <p>{balance} BTC</p>
            <p>ARS Equivalent: {balanceInARS}</p>
        </div>
    );
};

export default Balance;

