export const sendBTC = (address: string, amount: number, fee: number) => {
    return {
        type: 'SEND_BTC',
        payload: { address, amount, fee }
    };
};
