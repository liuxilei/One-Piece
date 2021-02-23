export const COUNTER_INCREMENT = "Counter/increment";
export const COUNTER_DECREMENT = "Counter/decrement";
export const COUNTER_ASYNCINCREMENT = "Counter/asyncIncrement";

export interface CounterState {
    readonly value: number
}

interface IncrementAction {
    type: typeof COUNTER_INCREMENT
}

interface DecrementAction {
    type: typeof COUNTER_DECREMENT
}

interface AsyncIncrementAction {
    type: typeof COUNTER_ASYNCINCREMENT
}

export type CounterAction = IncrementAction | DecrementAction | AsyncIncrementAction