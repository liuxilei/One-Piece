import { COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_ASYNCINCREMENT } from './actionTypes';

export const increment = () => ({
    type: COUNTER_INCREMENT
});

export const decrement = () => ({
    type: COUNTER_DECREMENT
});

export const asyncIncrement = () => ({
    type: COUNTER_ASYNCINCREMENT
});