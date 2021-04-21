import { createStore } from 'redux';
import cartReducer from '../reducers/cartReducers';

export const store = createStore(cartReducer);
