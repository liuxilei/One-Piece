import { createStore, compose, applyMiddleware, combineReducers  } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// import { combineReducers } from "redux-immutable";
import { reducer as counterReducer } from './demos/Counter';
import { reducer as expressReducer } from "./demos/G6Try/RelationalExpression";
import { reducer as todolistReducer } from "./demos/TodoList";
import { reducer as shortBookReducer } from "./demos/ShortBook";
import { reducer as BookKeepingReducer } from "./demos/BookKeeping";
import { sagas as counterSaga } from './demos/Counter';
import { sagas as todoSaga } from "./demos/TodoList";
import { sagas as shortBookSaga } from "./demos/ShortBook";

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
    Counter: counterReducer,
    Express: expressReducer,
    Todolist: todolistReducer,
    ShortBook: shortBookReducer,
    BookKeeping: BookKeepingReducer
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
sagaMiddleware.run(shortBookSaga);

export default store;