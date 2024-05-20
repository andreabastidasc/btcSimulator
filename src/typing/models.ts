export interface Transaction {
    id: number;
    address: string;
    amount: number;
    fee: number;
    status: 'success' | 'failed';
    date: string;
}

export interface BtcState {
    balance: number;
    transactions: Transaction[];
}

export interface SendBtcAction {
    type: 'SEND_BTC';
    payload: {
        address: string;
        amount: number;
        fee: number;
    };
}