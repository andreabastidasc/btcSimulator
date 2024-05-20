import {
    Box,
    Button,
    Heading,
    Flex,
    Text,
    useDisclosure
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useSelector } from 'react-redux';
import { useState } from 'react';

import {
    BtcState,
    Transaction
} from '../../typing/models';
import ModalComponent from '../Modal/modal';
import styles from './transactionsHistory.module.scss'
import TransactionDetail from '../TransactionDetail/transactionDetail';


const TransactionHistory = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedTransactionId, setSelectedTransactionId]= useState<number | null>(null)
    const transactions = useSelector((state: BtcState) => state.transactions);

    const handleOnClick = (id: number) => {
        setSelectedTransactionId(id);
        onOpen();
    };

    return (
        <div className={styles.history}>
            <Heading
                as='h2'
                size='md'
                noOfLines={1}
                color='purple.700'
            >
                Movimientos
            </Heading>
            <Flex
                flexDirection='column'
                gap={5}
            >
                {transactions.length === 0 ? (
                    <Text fontSize='md'>
                        No hay transacciones disponibles.
                    </Text>
                ) : (
                    transactions.map((tx: Transaction) => (
                        <div key={tx.id}>
                            <p> Transfer </p>
                            <p>{`-${tx.amount}`} </p>
                            <p>{tx.status}</p>
                            <Button onClick={() => handleOnClick(tx.id)}>
                                <ChevronRightIcon w={5} h={5} color="blackAlpha.600" />
                            </Button>
                        </div>
                    ))
                )}
                <ModalComponent
                    isOpen={isOpen}
                    onClose={onClose}
                    title="Detalle de la transacción"
                >
                    {selectedTransactionId !== null ? (
                        <TransactionDetail transactionId={selectedTransactionId} />
                    ) : (
                        <Text fontSize='md'>
                            No se ha encontrado la transacción. Intenta más tarde.
                        </Text>
                    )}
                </ModalComponent>
            </Flex>
        </div>
    );
};

export default TransactionHistory;
