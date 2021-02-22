import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
// import { combineReducers } from "redux-immutable";
import rootReducer from './root-reducer';
import {
	sagas as counterSaga,
} from "@/pages/Counter";
import { isDev } from "@/utils";
// import { reducer as expressReducer } from "@/pages/RelationalExpression";
// import {
// 	reducer as todolistReducer,
// 	sagas as todoSaga,
// } from "@/pages/TodoList";
// import {
// 	reducer as shortBookReducer,
// 	sagas as shortBookSaga,
// } from "@/pages/ShortBook";
// import { reducer as BookKeepingReducer } from "@/pages/BookKeeping";
// import { reducer as Express2Reducer } from "@/pages/ExpressionRemake";

const sagaMiddleware = createSagaMiddleware();
// const reducer = combineReducers({
// 	Counter: counterReducer,
// 	Express: expressReducer,
// 	Todolist: todolistReducer,
// 	ShortBook: shortBookReducer,
// 	BookKeeping: BookKeepingReducer,
// 	Express2: Express2Reducer,
// });

let middlewares = [];
middlewares.push(sagaMiddleware);
middlewares.push(thunk);
// 开发环境添加 redux-logger 日志
if (isDev) {
	middlewares.push(logger);
}

const storeEnhancers = compose(
	applyMiddleware(...middlewares),
	(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

const initialState = {};

const store = createStore(rootReducer, initialState, storeEnhancers);
sagaMiddleware.run(counterSaga);
// sagaMiddleware.run(todoSaga);
// sagaMiddleware.run(shortBookSaga);


export type AppState = ReturnType<typeof rootReducer>
export default store;
