import {
	BOOKKEEPING_ADDRECORD,
	BOOKKEEPING_SETCURRENTDATE,
	BOOKKEEPING_DELETERECORDITEM,
	BOOKKEEPING_SETEDITRECORDITEM,
	BOOKKEEPING_EDITSUCCESS,
	BOOKKEEPING_MODECHANGE,
	BOOKKEEPING_WAYCHANGE,
	Record,
	BookKeepingActions,
	Mode,
	Way,
} from "./types";

export const addRecord = (record: Record): BookKeepingActions => ({
	type: BOOKKEEPING_ADDRECORD,
	record,
});

export const setCurrentDate = (currentDate: string): BookKeepingActions => ({
	type: BOOKKEEPING_SETCURRENTDATE,
	currentDate,
});

export const deleteRecordItem = (id: string): BookKeepingActions => ({
	type: BOOKKEEPING_DELETERECORDITEM,
	id,
})

export const setEditRecordItem = (record: Record): BookKeepingActions => ({
	type: BOOKKEEPING_SETEDITRECORDITEM,
	record,
});

export const editSuccess = (record: Record): BookKeepingActions => ({
	type: BOOKKEEPING_EDITSUCCESS,
	record,
});

export const modeChange = (mode: Mode): BookKeepingActions  => ({
	type: BOOKKEEPING_MODECHANGE,
	mode,
});

export const wayChange = (way: Way): BookKeepingActions => ({
	type: BOOKKEEPING_WAYCHANGE,
	way,
});
