import {
    useEffect,
    useState
} from 'react';
import { useSelector } from 'react-redux';
import {
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Text,
    useToast
} from '@chakra-ui/react';

import { BtcState } from '../../typing/models';
import styles from './sendBtc.module.scss'

interface SendBTCProps {
    sendBTC: (address: string, amount: number, fee: number) => 'success' | 'error';
    showForm: (value: boolean) => void;
}

const SendBTC: React.FC<SendBTCProps> = ({ sendBTC, showForm }) => {
    const balance = useSelector((state: BtcState) => state.balance);
    const toast = useToast()
    const [address, setAddress] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const [fee, setFee] = useState<number>(0);

    useEffect(() => {
        const calculatedFee = parseFloat((Math.random() * (0.0002 - 0.0001) + 0.0001).toFixed(5));

        setFee(calculatedFee);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const totalAmount = parseFloat(amount) + fee;
        if (totalAmount > balance) {
            toast({
                title: 'Error',
                description: 'No es posible transferir esa cantidad. Intenta con un monto menor.',
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top'
            });
            return;
        }
        const status = sendBTC(address, parseFloat(amount), fee);
        showForm(false);
        toast({
            title: status === 'success' ? 'Transacción exitosa' : 'Transacción fallida',
            description: status === 'success' ?  'Tu transferencia fue exitosa!' : 'Tuvimos un error al enviar tu dinero',
            status: status,
            duration: 9000,
            isClosable: true,
            position: 'top'
        });
    };

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}
        >
            <Heading
                as='h2'
                size='md'
                noOfLines={1}
                color='purple.700'
            >
                Enviar BTC
            </Heading>
            <div>
                <FormLabel>Dirección BTC:</FormLabel>
                <Input
                    placeholder='Dirección'
                    required
                    type="text"
                    value={address}
                    maxLength={12}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <div>
                <FormLabel>Monto:</FormLabel>
                <Input
                    placeholder='Monto'
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    type="number"
                    value={amount}
                />
            </div>
            <Text
                color='pink.500'
                fontSize='md'
                fontWeight='600'
                marginTop={5}
            >
                Comisión: {fee} BTC
            </Text>
            <Button
                background='#5477EA'
                color='white'
                colorScheme='pink'
                marginTop={5}
                type='submit'
            >
                Enviar
            </Button>
        </form>
    );
};

export default SendBTC;
