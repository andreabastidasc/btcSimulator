import { useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';

interface SendBTCProps {
    sendBTC: (address: string, amount: number, fee: number) => 'success' | 'error';
    showForm: (value: boolean) => void;
}

const SendBTC: React.FC<SendBTCProps> = ({ sendBTC, showForm }) => {
    const [address, setAddress] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const [fee, setFee] = useState<number>(0);
    const toast = useToast()

    useEffect(() => {
        const calculatedFee = parseFloat((Math.random() * (0.0002 - 0.0001) + 0.0001).toFixed(5));
        setFee(calculatedFee);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const status = sendBTC(address, parseFloat(amount), fee);
        showForm(false);
        toast({
            title: status === 'success' ? 'Transacción exitosa' : 'Transacción fallida',
            description: status === 'success' ?  'Tu transferencia fue exitosa!' : 'Tuvimos un error al enviar tu dinero',
            status: status,
            duration: 9000,
            isClosable: true,
            position: 'top-right'
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Send BTC</h2>
            <label>
                Address:
                <input
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    type="text"
                    value={address}
                />
            </label>
            <label>
                Amount:
                <input
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    type="number"
                    value={amount}
                />
            </label>
            <p>Comisión: {fee} BTC</p>
            <button type="submit">Send</button>
        </form>
    );
};

export default SendBTC;
