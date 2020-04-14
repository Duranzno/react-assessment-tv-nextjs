import { createStore } from 'redux';
import { reducer } from './reducers';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const store = (initialState) => createStore(reducer, initialState);
