import {
    TODOLIST_SETINPUTVALUE,
    TODOLIST_ADDTODOITEM,
    TODOLIST_DELETETODOITEM,
    TODOLIST_INITLIST,
} from "./actionsTypes";
import utils from "../../util";

const defaultState = {
    inputValue: "",
    list: []
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case TODOLIST_SETINPUTVALUE: {
            return {
                ...state,
                inputValue: action.inputValue
            }
        }
        case TODOLIST_ADDTODOITEM: {
            return {
                ...state,
                list: [
                    ...state.list,
                    ...state.inputValue
                ],
                inputValue: ""
            }
        }
        case TODOLIST_DELETETODOITEM: {
            let copyList = utils.objCopy(state.list);
            copyList.splice(action.index, 1);
            return {
                ...state,
                list: copyList
            }
        }
        case TODOLIST_INITLIST: {
            return {
                ...state,
                list: action.list
            }
        }
        default: return state;
    }
}