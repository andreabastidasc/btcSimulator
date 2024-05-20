import React, { useEffect, useState } from 'react';
import { getExchangeRate } from '../../services/RatesService/rates.service';

interface BalanceProps {
    balance: number;
    sendAction: (value: boolean) => void;
}

const Balance: React.FC<BalanceProps> = ({ balance, sendAction }) => {
    const [exchangeRate, setExchangeRate] = useState<number | null>(null);

    useEffect(() => {
        const fetchExchangeRate = async () => {
            try {
                const rate = await getExchangeRate();
                const parsedRate = parseInt(rate.rates.ARS_BUY)

                console.log(rate)
                setExchangeRate(parsedRate)
            } catch (error) {
                console.error('Error fetching exchange rate', error);
            }
        };

        fetchExchangeRate();
    }, []);

    const getBalanceInARS = (balance: number) => {
        return exchangeRate ? (balance * exchangeRate).toFixed(2) : '---';
    }

    return (
        <div>
            <h2>Balance</h2>
            <p>{balance} BTC</p>
            <p>Total equivalente en ARS: {getBalanceInARS(balance)}</p>
            <button onClick={() => sendAction(true)}>Enviar</button>
        </div>
    );
};

export default Balance;

