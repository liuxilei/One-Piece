import {
	COUNTER_INCREMENT,
	COUNTER_DECREMENT,
	COUNTER_ASYNCINCREMENT,
	CounterAction
} from "./types";

export function increment(): CounterAction {
	return {
		type: COUNTER_INCREMENT,
	}
};

export function decrement(): CounterAction {
	return {
		type: COUNTER_DECREMENT,
	}
};

export function asyncIncrement(): CounterAction {
	return {
		type: COUNTER_ASYNCINCREMENT,
	}
};
