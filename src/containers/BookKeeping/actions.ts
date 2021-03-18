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

export function addRecord(record: Record): BookKeepingActions {
	return {
		type: BOOKKEEPING_ADDRECORD,
		record,
	};
}

export function setCurrentDate(currentDate: string): BookKeepingActions {
	return {
		type: BOOKKEEPING_SETCURRENTDATE,
		currentDate,
	};
}

export function deleteRecordItem(id: string): BookKeepingActions {
	return {
		type: BOOKKEEPING_DELETERECORDITEM,
		id,
	};
}

export function setEditRecordItem(record: Record): BookKeepingActions {
	return {
		type: BOOKKEEPING_SETEDITRECORDITEM,
		record,
	};
}

export function editSuccess(record: Record): BookKeepingActions {
	return {
		type: BOOKKEEPING_EDITSUCCESS,
		record,
	};
}
export function modeChange(mode: Mode): BookKeepingActions {
	return {
		type: BOOKKEEPING_MODECHANGE,
		mode,
	};
}

export function wayChange(way: Way): BookKeepingActions {
	return {
		type: BOOKKEEPING_WAYCHANGE,
		way,
	};
}
