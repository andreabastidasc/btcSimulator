import {
    Avatar,
    Button,
    Heading,
    Flex,
    Text,
    useDisclosure
} from '@chakra-ui/react';
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
        return (
            <Text fontSize='md'>
                Transacción no encontrada.
            </Text>
        )
    }

    return (
        <Flex
            flexDirection='column'
            gap={2}
        >
            <Text fontSize='md'>
                ID: {transaction.id}
            </Text>
            <Text fontSize='md'>
                Fecha: {transaction.date}
            </Text>
            <Text fontSize='md'>
                Monto: {transaction.amount} BTC
            </Text>
            <Text fontSize='md'>
                Dirección BTC: {transaction.address}
            </Text>
            <Text fontSize='md'>
                Status: {transaction.status}
            </Text>
            <Text fontSize='md'>
                Comisión: {transaction.fee} BTC
            </Text>
        </Flex>
    );
};

export default TransactionDetail;
