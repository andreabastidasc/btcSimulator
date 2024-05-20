import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/btcReducer';

export const store = configureStore({
    reducer: rootReducer
});
