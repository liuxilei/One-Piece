import {
    TODOLIST_SETINPUTVALUE,
    TODOLIST_ADDTODOITEM,
    TODOLIST_DELETETODOITEM,
    TODOLIST_INITLIST,
} from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
    inputValue: "",
    list: []
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case TODOLIST_SETINPUTVALUE: {
            return state.set("inputValue", action.inputValue)
        }
        case TODOLIST_ADDTODOITEM: {
            let copyList = state.get("list").toJS();
            copyList = [
                ...copyList,
                state.get("inputValue")
            ]
            return state.merge({
                list: fromJS(copyList),
                inputValue: ""
            });
        }
        case TODOLIST_DELETETODOITEM: {
            let copyList = state.get("list").toJS();
            copyList.splice(action.index, 1);
            return state.set("list", fromJS(copyList));
        }
        case TODOLIST_INITLIST: {
            return state.set("list", action.list);
        }
        default: return state;
    }
}