import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
	SHORTBOOK_GETLIST,
	SHORTBOOK_GETHOMEINFO,
	SHORTBOOK_GETMORELIST,
	SHORTBOOK_GETDETAILINFO,
	SHORTBOOK_LOGIN,
} from "./actionTypes";
import {
	setList,
	setHomeInfo,
	addNewList,
	setDetailInfo,
	loginSuccess,
} from "./actions";
import axios from "axios";
import { createHashHistory as createHistory } from "history";
const history = createHistory();

function* getList() {
	try {
		const { data } = yield axios.get("/api/headerList.json");
		yield put(setList(data.data));
	} catch (e) {
		console.log(e);
	}
}

function* getHomeInfo() {
	try {
		const { data } = yield axios.get("/api/home.json");
		yield put(setHomeInfo(data.data));
	} catch (e) {
		console.log(e);
	}
}

function* getMoreList({ articlePage }) {
	try {
		const { data } = yield axios.get(
			`/api/homeList.json?page=${articlePage}`,
		);
		yield put(addNewList(data.data, articlePage + 1));
	} catch (e) {
		console.log(e);
	}
}

function* getDetailInfo({ id }) {
	try {
		const { data } = yield axios.get(`/api/detail.json?id=${id}`);
		yield put(setDetailInfo(data.data));
	} catch (e) {
		console.log(e);
	}
}

function* login({ account, password }) {
	try {
		const { data } = yield axios.get(`/api/login.json`, {
			account,
			password,
		});
		if (data.success) {
			yield put(loginSuccess());
			history.replace("/ShortBook/");
		}
	} catch (e) {
		console.log(e);
	}
}

export default function* shortBookSagas() {
	yield takeEvery(SHORTBOOK_GETLIST, getList);
	yield takeEvery(SHORTBOOK_GETHOMEINFO, getHomeInfo);
	yield takeEvery(SHORTBOOK_GETMORELIST, getMoreList);
	yield takeEvery(SHORTBOOK_GETDETAILINFO, getDetailInfo);
	yield takeEvery(SHORTBOOK_LOGIN, login);
}
