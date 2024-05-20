interface Transaction {
    id: number;
    address: string;
    amount: number;
    fee: number;
    status: 'success' | 'failed';
    date: string;
}

interface BtcState {
    balance: number;
    transactions: Transaction[];
}

interface SendBtcAction {
    type: 'SEND_BTC';
    payload: {
        address: string;
        amount: number;
        fee: number;
    };
}

type BtcAction = SendBtcAction;

const initialState: BtcState = {
    balance: 0,
    transactions: [],
};

const btcReducer = (state: BtcState = initialState, action: BtcAction): BtcState => {
    switch (action.type) {
        case 'SEND_BTC':
            const { address, amount, fee } = action.payload;
            const newBalance = state.balance - amount - fee;
            const newTransaction: Transaction = {
                id: state.transactions.length + 1,
                address,
                amount,
                fee,
                status: newBalance >= 0 ? 'success' : 'failed',
                date: new Date().toLocaleString(),
            };
            return {
                ...state,
                balance: newBalance >= 0 ? newBalance : state.balance,
                transactions: [newTransaction, ...state.transactions],
            };
        default:
            return state;
    }
};

export default btcReducer;