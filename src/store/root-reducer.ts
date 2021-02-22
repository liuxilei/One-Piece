import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '@/utils/history';
import {
	reducer as counterReducer,
} from "@/pages/Counter";
import { reducer as Express2Reducer } from "@/pages/ExpressionRemake";

const rootReducer = combineReducers({
  router: connectRouter(history),
  Counter: counterReducer,
  Express2: Express2Reducer,
});

export default rootReducer;
