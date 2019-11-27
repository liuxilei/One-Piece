import { COUNTER_INCREMENT, COUNTER_DECREMENT } from './actionTypes';

const defaultState = {
    value: 0
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case COUNTER_INCREMENT:
            return {
                ...state,
                value: state.value + 1
            };
        case COUNTER_DECREMENT:
            return {
                ...state,
                value: state.value - 1
            };
        default:
            return state;
    }
}