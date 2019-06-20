import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { reducer as counterReducer } from './demos/Counter';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
    counterState: counterReducer
});

const win = window;
let middlewares = [];
middlewares.push(sagaMiddleware);

const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

const store = createStore(reducer, {}, storeEnhancers);
sagaMiddleware.run(rootSaga);

export default store;