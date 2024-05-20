export interface ExchangeRate {
    base: string;
    rates: {
        [currency: string]: string;
    };
    variation: {
        [currency: string]: string;
    };
    names: {
        [currency: string]: {
            name: string;
            symbol: string;
        };
    };
}