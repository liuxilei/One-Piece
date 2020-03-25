import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { reducer as counterReducer } from './demos/Counter';
import { reducer as expressReducer } from "./demos/G6Try/RelationalExpression";
import { reducer as todolistReducer } from "./demos/TodoList";
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { sagas as counterSaga } from './demos/Counter';
import { sagas as todoSaga } from "./demos/TodoList";

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
    Counter: counterReducer,
    Express: expressReducer,
    Todolist: todolistReducer
});

const win = window;
let middlewares = [];
middlewares.push(sagaMiddleware);
middlewares.push(thunk);
middlewares.push(logger);

const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : f => f,
);

const store = createStore(reducer, {}, storeEnhancers);
sagaMiddleware.run(counterSaga);
sagaMiddleware.run(todoSaga);

export default store;