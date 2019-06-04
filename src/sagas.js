import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import { ASYNCINCREMENT } from './demos/Counter/actionTypes';
import { actions as CounterActions } from './demos/Counter';
import { message } from 'antd';
import { createHashHistory as createHistory } from 'history';
const history = createHistory();

function* asyncIncrement() {
    yield delay(1000);
    yield put(CounterActions.increment());
}

export default function* rootSaga() {
    yield takeEvery(ASYNCINCREMENT, asyncIncrement);
}