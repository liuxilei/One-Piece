import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
// import { combineReducers } from "redux-immutable";
import {
	reducer as counterReducer,
	sagas as counterSaga,
} from "@/pages/Counter";
import { reducer as expressReducer } from "@/pages/G6Try/RelationalExpression";
import {
	reducer as todolistReducer,
	sagas as todoSaga,
} from "@/pages/TodoList";
import {
	reducer as shortBookReducer,
	sagas as shortBookSaga,
} from "@/pages/ShortBook";
import { reducer as BookKeepingReducer } from "@/pages/BookKeeping";

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
	Counter: counterReducer,
	Express: expressReducer,
	Todolist: todolistReducer,
	ShortBook: shortBookReducer,
	BookKeeping: BookKeepingReducer,
});

const win = window;
let middlewares = [];
middlewares.push(sagaMiddleware);
middlewares.push(thunk);
middlewares.push(logger);

const storeEnhancers = compose(
	applyMiddleware(...middlewares),
	win && win.devToolsExtension ? win.devToolsExtension() : (f) => f,
);

const store = createStore(reducer, {}, storeEnhancers);
sagaMiddleware.run(counterSaga);
sagaMiddleware.run(todoSaga);
sagaMiddleware.run(shortBookSaga);

export default store;
