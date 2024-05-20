import React, { useState } from 'react';
import { store } from './redux/store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Balance from './components/Balance/Balance';
import SendBTC from './components/SendBtc/sendBtc';
import TransactionHistory from './components/TransactionsHistory/transactionsHistory';

const App: React.FC = () => {
    const [ showSendForm, setShowSendForm ] = useState(false);
    const sendBTC = (address: string, amount: number, fee: number) => {
        store.dispatch({ type: 'SEND_BTC', payload: { address, amount, fee } });
    };

    const balance = store.getState().balance;

    return (
        <Provider store={store}>
            <div className="App">
                <h1>BTC Simulaor</h1>
                <Balance balance={balance} sendAction={setShowSendForm} />
                {showSendForm && (
                   <div>
                        <SendBTC sendBTC={sendBTC} />
                        <button onClick={() => setShowSendForm(false)}>
                            Cancelar envío
                        </button>
                   </div>
                )}
                <TransactionHistory />
            </div>
        </Provider>
  );
};

export default App;
