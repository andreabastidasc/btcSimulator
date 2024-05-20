import { api } from '../ApiConfig/apiConfig';
import { ExchangeRate } from './rates.model';

export const getExchangeRate = async (): Promise<ExchangeRate>  =>  {
    try {
        const response = await api.get('/rates/');

        return response.data;
    }
    catch (error) {
        console.error('Error fetching exchange rate', error);
        throw error;
    }
};
