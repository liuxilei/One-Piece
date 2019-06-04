import { INCREMENT, DECREMENT } from './actionTypes';

const defaultState = {
    value: 0
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + 1
            };
        case DECREMENT:
            return {
                ...state,
                value: state.value - 1
            };
        default:
            return state;
    }
}