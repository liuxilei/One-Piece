import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { TODOLIST_GETINITLIST } from "./actionsTypes";
import { initList } from "./actions";
import axios from "axios";

function* getInitList() {
    try {
        const { data } = yield axios.get("/api/list.json");
        yield put(initList(data));
    } catch (e) {
        console.log(e);
    }
}

export default function* todoSaga() {
    yield takeEvery(TODOLIST_GETINITLIST, getInitList);
}
