import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '@/utils/history';
import {
	reducer as counterReducer,
} from "@/pages/Counter";

const rootReducer = combineReducers({
  router: connectRouter(history),
  Counter: counterReducer,
});

export default rootReducer;
