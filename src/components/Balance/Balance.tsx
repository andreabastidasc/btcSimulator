import {
    useEffect,
    useState
} from 'react';
import { useSelector } from 'react-redux';

import { BtcState } from '../../typing/models';
import { Button, Heading, Text } from '@chakra-ui/react';
import { getExchangeRate } from '../../services/RatesService/rates.service';
import styles from './Balance.module.scss';

interface BalanceProps {
    sendAction: (value: boolean) => void;
}

const Balance: React.FC<BalanceProps> = ({ sendAction }) => {
    const [exchangeRate, setExchangeRate] = useState<number | null>(null);
    const balance = useSelector((state: BtcState) => state.balance);

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
        <div className={styles.balance}>
            <Heading
                as='h2'
                size='md'
                noOfLines={1}
                color='purple.700'
            >
                Balance
            </Heading>
            <div>
                <Text fontSize='xl'>{balance} BTC</Text>
                <Text fontSize='md'>
                    Total equivalente en ARS: {getBalanceInARS(balance)} $ARS
                </Text>
            </div>
            <Button
                background='#5477EA'
                color='white'
                colorScheme='pink'
                onClick={() => sendAction(true)}
            >
                Enviar
            </Button>
        </div>
    );
};

export default Balance;

