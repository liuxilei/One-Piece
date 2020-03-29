import { fromJS } from "immutable";
import {
    BOOKKEEPING_ADDRECORD,
    BOOKKEEPING_SETCURRENTDATE,
    BOOKKEEPING_DELETERECORDITEM,
    BOOKKEEPING_SETEDITRECORDITEM,
    BOOKKEEPING_EDITSUCCESS,
} from "./actionTypes";

let bookKeeping = JSON.parse(sessionStorage.getItem("bookKeeping")) || {};
const defaultState = fromJS({
    bookKeeping,
    currentDate: null,
    currentEditRecord: null,
})

export default (state = defaultState, action) => {
    let bookKeeping = state.get("bookKeeping").toJS();
    switch (action.type) {
        case BOOKKEEPING_ADDRECORD:
            let recordToTime = bookKeeping[action.record.time];
            if (!recordToTime) {
                recordToTime = [{
                    way: action.record.way,
                    wayType: action.record.wayType,
                    title: action.record.title,
                    money: action.record.money,
                    id: action.record.id,
                }]
            } else {
                recordToTime.push({
                    way: action.record.way,
                    wayType: action.record.wayType,
                    title: action.record.title,
                    money: action.record.money,
                    id: action.record.id,
                });
            }
            bookKeeping[action.record.time] = recordToTime;
            sessionStorage.setItem("bookKeeping", JSON.stringify(fromJS(bookKeeping)));
            return state.set("bookKeeping", fromJS(bookKeeping));

        case BOOKKEEPING_SETCURRENTDATE:
            return state.set("currentDate", action.currentDate);

        case BOOKKEEPING_DELETERECORDITEM:
            let recordToTime2 = bookKeeping[state.get("currentDate")];
            let index = recordToTime2.findIndex(item => item.id === action.id);
            recordToTime2.splice(index, 1);
            bookKeeping[state.get("currentDate")] = recordToTime2;
            sessionStorage.setItem("bookKeeping", JSON.stringify(fromJS(bookKeeping)));
            return state.set("bookKeeping", fromJS(bookKeeping));

        case BOOKKEEPING_SETEDITRECORDITEM:
            return state.set("currentEditRecord", action.record);

        case BOOKKEEPING_EDITSUCCESS:
            let currentDate = state.get("currentDate");
            if (action.record.time !== currentDate) {
                let recordToTime3 = bookKeeping[currentDate];
                let index = recordToTime3.findIndex(item => item.id === action.record.id);
                recordToTime3.splice(index, 1);
                bookKeeping[currentDate] = recordToTime3;

            }
            let recordToTime4 = bookKeeping[action.record.time];
            if (action.record.time !== currentDate) {
                recordToTime4.push({
                    way: action.record.way,
                    wayType: action.record.wayType,
                    title: action.record.title,
                    money: action.record.money,
                    id: action.record.id,
                });
            } else {
                recordToTime4.map(item => {
                    if (item.id === action.record.id) {
                        item.way = action.record.way;
                        item.wayType = action.record.wayType;
                        item.title = action.record.title;
                        item.money = action.record.money;
                    }
                });
            }

            bookKeeping[action.record.time] = recordToTime4;
            sessionStorage.setItem("bookKeeping", JSON.stringify(fromJS(bookKeeping)));
            return state.merge({
                bookKeeping: fromJS(bookKeeping),
                currentEditRecord: null
            });
        default:
            return state;
    }
}