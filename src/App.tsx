import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Balance from './components/Balance/Balance';

const App: React.FC = () => {

    return (
        <div className="App">
            <h1>BTC Simulator</h1>
            <Balance balance={1} />
        </div>
  );
};

export default App;
