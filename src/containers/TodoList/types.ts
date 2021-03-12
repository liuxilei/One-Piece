export const TODOLIST_SETINPUTVALUE = "todolist/setInputValue";
export const TODOLIST_ADDTODOITEM = "todolist/addTodoItem";
export const TODOLIST_DELETETODOITEM = "todolist/deleteTodoItem";
export const TODOLIST_INITLIST = "todolist/initList";
export const TODOLIST_GETINITLIST = "todolist/getInitList";


export interface State {
    inputValue?: string
	readonly list: Array<string>
}

interface SetInputValueAction {
    type: typeof TODOLIST_SETINPUTVALUE
    inputValue: string
}

interface AddTodoItemAction {
    type: typeof TODOLIST_ADDTODOITEM
}

interface DeleteTodoItemAction {
    type: typeof TODOLIST_DELETETODOITEM
    index: number
}

interface InitListAction {
    type: typeof TODOLIST_INITLIST
    list: Array<string>
}   

interface GetInitList {
    type: typeof TODOLIST_GETINITLIST
}

export type TodoListAction = SetInputValueAction | AddTodoItemAction | DeleteTodoItemAction | InitListAction | GetInitList