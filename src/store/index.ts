import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from './root-reducer';
import { sagas as counterSaga } from "@/containers/Counter";
import { sagas as todoSaga } from "@/containers/TodoList";
import { sagas as shortBookSaga } from "@/containers/ShortBook";
import { isDev } from "@/utils";	

const sagaMiddleware = createSagaMiddleware();

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
sagaMiddleware.run(todoSaga);
sagaMiddleware.run(shortBookSaga);


export type AppState = ReturnType<typeof rootReducer>
export default store;
