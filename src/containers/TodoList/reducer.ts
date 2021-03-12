import {
	TODOLIST_SETINPUTVALUE,
	TODOLIST_ADDTODOITEM,
	TODOLIST_DELETETODOITEM,
	TODOLIST_INITLIST,
	State,
	TodoListAction,
} from "./types";

const defaultState: State = {
	inputValue: "",
	list: [],
};

export default (state = defaultState, action: TodoListAction): State => {
	switch (action.type) {
		case TODOLIST_SETINPUTVALUE: {
			return {
				...state,
				inputValue: action.inputValue
			}
		}
		case TODOLIST_ADDTODOITEM: {
			let copyList = [...state.list, state.inputValue];
			return {
				...state,
				list: copyList,
				inputValue: "",
			};
		}
		case TODOLIST_DELETETODOITEM: {
			let copyList = [...state.list];
			copyList.splice(action.index, 1);
			return {
				...state,
				list: copyList
			};
		}
		case TODOLIST_INITLIST: {
			return {
				...state,
				list: action.list
			};
		}
		default:
			return state;
	}
};
