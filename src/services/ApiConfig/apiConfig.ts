import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1500,
    maxRedirects: 5,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
});
