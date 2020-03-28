import { COUNTER_INCREMENT, COUNTER_DECREMENT } from './actionTypes';
import { fromJS } from "immutable";

const defaultState = fromJS({
    value: 0
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case COUNTER_INCREMENT:
            return state.set("value", state.get("value") + 1)
        case COUNTER_DECREMENT:
            return state.set("value", state.get("value") - 1)
        default:
            return state;
    }
}