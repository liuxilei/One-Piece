import { INCREMENT, DECREMENT, ASYNCINCREMENT } from './actionTypes';

export const increment = () => ({
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
});

export const asyncIncrement = () => ({
    type: ASYNCINCREMENT
});