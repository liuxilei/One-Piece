import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import { COUNTER_ASYNCINCREMENT } from './actionTypes';
import { increment } from './actions';
import { message } from 'antd';
import { createHashHistory as createHistory } from 'history';
const history = createHistory();

function* asyncIncrement() {
    yield delay(1000);
    yield put(increment());
}

export default function* counterSaga() {
    yield takeEvery(COUNTER_ASYNCINCREMENT, asyncIncrement);
}