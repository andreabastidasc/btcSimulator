import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import { useState } from 'react';

import { store } from './redux/store';
import Balance from './components/Balance/Balance';
import SendBTC from './components/SendBtc/sendBtc';
import TransactionHistory from './components/TransactionsHistory/transactionsHistory';


const App: React.FC = () => {
    const [ showSendForm, setShowSendForm ] = useState(false);

    const sendTransfer = (address: string, amount: number, fee: number) => {
        store.dispatch({ type: 'SEND_BTC', payload: { address, amount, fee } });
        const transactions = store.getState().transactions;
        return transactions[0]?.status;
    };

    const balance = store.getState().balance;

    return (
        <Provider store={store}>
            <ChakraProvider>
                <div className="App">
                    <h1>BTC Simulator</h1>
                    <Balance
                        balance={balance}
                        sendAction={setShowSendForm}
                    />
                    {showSendForm && (
                        <div>
                            <SendBTC
                                sendBTC={sendTransfer}
                                showForm={setShowSendForm}
                            />
                            <button
                                onClick={() => setShowSendForm(false)}
                            >
                                Cancelar envío
                            </button>
                        </div>
                    )}
                    <TransactionHistory />
                </div>
            </ChakraProvider>
        </Provider>
  );
};

export default App;
