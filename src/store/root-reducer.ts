import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '@/utils/history';
import {
  reducer as counterReducer,
} from "@/containers/Counter";
import { reducer as Express2Reducer } from "@/containers/ExpressionRemake";
import { reducer as todoReducer } from "@/containers/TodoList";
import { reducer as shortBookReducer } from "@/containers/ShortBook";
import { reducer as BookKeepingReducer } from "@/containers/BookKeeping";
import { reducer as expressReducer } from "@/containers/RelationalExpression";

const rootReducer = combineReducers({
  router: connectRouter(history),
  Counter: counterReducer,
  Express2: Express2Reducer,
  Todolist: todoReducer,
  ShortBook: shortBookReducer,
  BookKeeping: BookKeepingReducer,
  Express: expressReducer,
});

export default rootReducer;