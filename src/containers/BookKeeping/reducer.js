import {
	BOOKKEEPING_ADDRECORD,
	BOOKKEEPING_SETCURRENTDATE,
	BOOKKEEPING_DELETERECORDITEM,
	BOOKKEEPING_SETEDITRECORDITEM,
	BOOKKEEPING_EDITSUCCESS,
	BOOKKEEPING_MODECHANGE,
	BOOKKEEPING_WAYCHANGE,
} from "./actionTypes";

const parse = (string) => {
	return JSON.parse(string);
};

const stringify = (val) => {
	return JSON.stringify(val);
};

let bookKeeping = parse(localStorage.getItem("bookKeeping")) || [];
const defaultState = {
	bookKeeping,
	currentDate: null,
	currentEditRecord: {},
	mode: "list",
	way: "expenditure",
};

export default (state = defaultState, action) => {
	let bookKeeping = [...state.bookKeeping];
	switch (action.type) {
		case BOOKKEEPING_ADDRECORD:
			localStorage.setItem(
				"bookKeeping",
				stringify([...bookKeeping, action.record]),
			);
			return {
				...state,
				bookKeeping: [...bookKeeping, action.record],
			};

		case BOOKKEEPING_SETCURRENTDATE:
			return {
				...state,
				currentDate: action.currentDate,
			};

		case BOOKKEEPING_DELETERECORDITEM:
			let newBookKeeping = bookKeeping.filter(
				(item) => item.id !== action.id,
			);
			sessionStorage.setItem("bookKeeping", stringify(newBookKeeping));
			return {
				...state,
				bookKeeping: newBookKeeping,
			};

		case BOOKKEEPING_SETEDITRECORDITEM:
			return {
				...state,
				currentEditRecord: action.record,
			};

		case BOOKKEEPING_EDITSUCCESS:
			const index = bookKeeping.findIndex(
				(item) => item.id === action.record.id,
			);
			if (index !== -1) {
				bookKeeping.splice(index, 1, action.record);
			} else {
				bookKeeping.push(action.record);
			}
			sessionStorage.setItem("bookKeeping", stringify(bookKeeping));
			return {
				...state,
				bookKeeping,
				currentEditRecord: null,
			};
		case BOOKKEEPING_MODECHANGE:
			return {
				...state,
				mode: action.mode,
			};
		case BOOKKEEPING_WAYCHANGE:
			return {
				...state,
				way: action.way,
			};
		default:
			return state;
	}
};
