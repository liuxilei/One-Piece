import { COUNTER_INCREMENT, COUNTER_DECREMENT, CounterAction, CounterState } from "./types";

const defaultState: CounterState = {
	value: 0,
};

export default (state = defaultState, action: CounterAction) => {
	switch (action.type) {
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
};
