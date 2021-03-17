import {
	BOOKKEEPING_ADDRECORD,
	BOOKKEEPING_SETCURRENTDATE,
	BOOKKEEPING_DELETERECORDITEM,
	BOOKKEEPING_SETEDITRECORDITEM,
	BOOKKEEPING_EDITSUCCESS,
	BOOKKEEPING_MODECHANGE,
	BOOKKEEPING_WAYCHANGE,
} from "./actionTypes";

export const addRecord = (record) => ({
	type: BOOKKEEPING_ADDRECORD,
	record,
});

export const setCurrentDate = (currentDate) => ({
	type: BOOKKEEPING_SETCURRENTDATE,
	currentDate,
});

export const deleteRecordItem = (id) => ({
	type: BOOKKEEPING_DELETERECORDITEM,
	id,
});

export const setEditRecordItem = (record) => ({
	type: BOOKKEEPING_SETEDITRECORDITEM,
	record,
});

export const editSuccess = (record) => ({
	type: BOOKKEEPING_EDITSUCCESS,
	record,
});

export function modeChange(mode) {
	return {
		type: BOOKKEEPING_MODECHANGE,
		mode,
	};
}

export function wayChange(way) {
	return {
		type: BOOKKEEPING_WAYCHANGE,
		way,
	};
}
