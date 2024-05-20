import {
    BtcState,
    SendBtcAction,
    Transaction,
} from "../../typing/models";


type BtcAction = SendBtcAction;

const initialState: BtcState = {
    balance: 150,
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
                status: newBalance >= 0 ? 'success' : 'error',
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
