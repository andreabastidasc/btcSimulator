import { Button, ChakraProvider, Heading } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import { useState } from 'react';

import { store } from './redux/store';
import Balance from './components/Balance/Balance';
import SendBTC from './components/SendBtc/sendBtc';
import TransactionHistory from './components/TransactionsHistory/transactionsHistory';
import './App.scss';


const App: React.FC = () => {
    const [ showSendForm, setShowSendForm ] = useState(false);

    const sendTransfer = (address: string, amount: number, fee: number) => {
        store.dispatch({ type: 'SEND_BTC', payload: { address, amount, fee } });
        const transactions = store.getState().transactions;
        return transactions[0]?.status;
    };

    return (
        <Provider store={store}>
            <ChakraProvider>
                <div className="app">
                    <div className='app__content'>
                        <Heading
                            as='h1'
                            color='#5477EA'
                            size='xl'
                            noOfLines={1}
                            textAlign='center'
                        >
                            BTC Simulator
                        </Heading>
                        <Balance
                            sendAction={setShowSendForm}
                        />
                        {showSendForm && (
                            <div className='app__content__form'>
                                <SendBTC
                                    sendBTC={sendTransfer}
                                    showForm={setShowSendForm}
                                />
                                <Button
                                    background='pink.400'
                                    color='white'
                                    colorScheme='purple'
                                    onClick={() => setShowSendForm(false)}
                                >
                                    Cancelar
                                </Button>
                            </div>
                        )}
                        <TransactionHistory />
                    </div>
                </div>
            </ChakraProvider>
        </Provider>
  );
};

export default App;
