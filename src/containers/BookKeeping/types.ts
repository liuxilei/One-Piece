export const BOOKKEEPING_ADDRECORD = "BookKeeping/addRecord";
export const BOOKKEEPING_SETCURRENTDATE = "BookKeeping/setCurrentDate";
export const BOOKKEEPING_DELETERECORDITEM = "BookKeeping/deleteRecordItem";
export const BOOKKEEPING_SETEDITRECORDITEM = "BookKeeping/setEditRecordItem";
export const BOOKKEEPING_EDITSUCCESS = "BookKeeping/editSuccess";
export const BOOKKEEPING_MODECHANGE = "BookKeeping/modeChange";
export const BOOKKEEPING_WAYCHANGE = "BookKeeping/wayChange";

export type Mode = "list" | "chart";

export type Way = "income" | "expenditure";

export interface Record {
	id?: string;
	way?: Way;
	wayType?: string;
	title?: string;
	money?: string;
	time?: string;
}

export interface State {
	bookKeeping: Array<Record>;
	currentDate: string;
	currentEditRecord: Record | {};
	mode: Mode;
	way: Way;
}

interface AddRecordAction {
	type: typeof BOOKKEEPING_ADDRECORD;
	record: Record;
}

interface SetCurrentDateAction {
	type: typeof BOOKKEEPING_SETCURRENTDATE;
	currentDate: string;
}

interface DeleteRecordItemAction {
	type: typeof BOOKKEEPING_DELETERECORDITEM;
	id: string;
}

interface SetEditRecordItemAction {
	type: typeof BOOKKEEPING_SETEDITRECORDITEM;
	record: Record;
}

interface EditSuccessAction {
	type: typeof BOOKKEEPING_EDITSUCCESS;
	record: Record;
}

interface ModeChangeAction {
	type: typeof BOOKKEEPING_MODECHANGE;
	mode: Mode;
}

interface WayChange {
	type: typeof BOOKKEEPING_WAYCHANGE;
	way: Way;
}

export type BookKeepingActions =
	| AddRecordAction
	| SetCurrentDateAction
	| DeleteRecordItemAction
	| SetEditRecordItemAction
	| EditSuccessAction
	| ModeChangeAction
	| WayChange;
