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

export const setInputValue = (inputValue: string): TodoListAction => ({
	type: TODOLIST_SETINPUTVALUE,
	inputValue,
});
export const addTodoItem = (): TodoListAction => ({
	type: TODOLIST_ADDTODOITEM,
})

export const deleteTodoItem = (index: number): TodoListAction => ({
	type: TODOLIST_DELETETODOITEM,
	index,
})

export const initList = (list: Array<string>): TodoListAction => ({
	type: TODOLIST_INITLIST,
	list,
})

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

export const getInitList = (): TodoListAction => ({
	type: TODOLIST_GETINITLIST
})
