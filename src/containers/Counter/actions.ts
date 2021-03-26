import {
	COUNTER_INCREMENT,
	COUNTER_DECREMENT,
	COUNTER_ASYNCINCREMENT,
	CounterAction
} from "./types";

export const increment = (): CounterAction => ({
	type: COUNTER_INCREMENT,
});

export const decrement = (): CounterAction => ({
	type: COUNTER_DECREMENT,
});

export const asyncIncrement = (): CounterAction => ({
	type: COUNTER_ASYNCINCREMENT,
});
