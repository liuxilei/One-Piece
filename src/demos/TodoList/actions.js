import {
    TODOLIST_SETINPUTVALUE,
    TODOLIST_ADDTODOITEM,
    TODOLIST_DELETETODOITEM,
    TODOLIST_INITLIST,
    TODOLIST_GETINITLIST,
} from "./actionTypes";
import axios from "axios";
import { fromJS } from "immutable";

export const setInputValue = (inputValue) => ({
    type: TODOLIST_SETINPUTVALUE,
    inputValue
});

export const addTodoItem = () => ({
    type: TODOLIST_ADDTODOITEM,
});

export const deleteTodoItem = (index) => ({
    type: TODOLIST_DELETETODOITEM,
    index,
});

export const initList = (list) => ({
    type: TODOLIST_INITLIST,
    list: fromJS(list)
});

//redux-thunk使用示例
export const getTolist = () => {
    return (dispatch) => {
        axios.get("/api/list.json").then(res => {
            const data = res.data;
            dispatch(initList(data));
        });
    }
}

export const getInitList = () => ({
    type: TODOLIST_GETINITLIST,
})