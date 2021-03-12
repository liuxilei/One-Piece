import {
	TODOLIST_SETINPUTVALUE,
	TODOLIST_ADDTODOITEM,
	TODOLIST_DELETETODOITEM,
	TODOLIST_INITLIST,
	TODOLIST_GETINITLIST,
	TodoListAction
} from "./types";
import axios from "axios";
import { Dispatch } from 'redux';

export function setInputValue(inputValue: string): TodoListAction {
	return {
		type: TODOLIST_SETINPUTVALUE,
		inputValue,
	}
};

export function addTodoItem(): TodoListAction {
	return {
		type: TODOLIST_ADDTODOITEM,
	}
}

export function deleteTodoItem(index: number): TodoListAction {
	return {
		type: TODOLIST_DELETETODOITEM,
		index,
	}
}

export function initList(list: Array<string>): TodoListAction {
	return {
		type: TODOLIST_INITLIST,
		list,
	}
}

//redux-thunk使用示例
export function getTolist() {
	return async (dispatch: Dispatch) => {
		try {
			const res = await axios.get("/api/list.json");
			if (res) {
				const data = res.data;
				dispatch(initList(data));
			}
		} catch (e) {
			console.error(e);
		}
	};
};

export function getInitList() {
	return {
		type: TODOLIST_GETINITLIST
	}
}
