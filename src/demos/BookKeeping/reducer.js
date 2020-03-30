import { fromJS } from "immutable";
import {
    BOOKKEEPING_ADDRECORD,
    BOOKKEEPING_SETCURRENTDATE,
    BOOKKEEPING_DELETERECORDITEM,
    BOOKKEEPING_SETEDITRECORDITEM,
    BOOKKEEPING_EDITSUCCESS,
} from "./actionTypes";

const parse = (string) => {
    return JSON.parse(string)
};

const stringify = (val) => {
    return JSON.stringify(val);
}

let bookKeeping = parse(sessionStorage.getItem("bookKeeping")) || {};
const defaultState = fromJS({
    bookKeeping,
    currentDate: null,
    currentEditRecord: null,
});


export default (state = defaultState, action) => {
    let bookKeeping = state.get("bookKeeping").toJS();
    let recordToTime;
    let currentDate = state.get("currentDate");
    switch (action.type) {
        case BOOKKEEPING_ADDRECORD:
            const { time, way, wayType, title, money, id } = action.record;
            recordToTime = bookKeeping[time];
            if (!recordToTime) {
                recordToTime = [{
                    way,
                    wayType,
                    title,
                    money,
                    id,
                }]
            } else {
                recordToTime.push({
                    way,
                    wayType,
                    title,
                    money,
                    id,
                });
            }
            bookKeeping[time] = recordToTime;
            sessionStorage.setItem("bookKeeping", stringify(fromJS(bookKeeping)));
            return state.set("bookKeeping", fromJS(bookKeeping));

        case BOOKKEEPING_SETCURRENTDATE:
            return state.set("currentDate", action.currentDate);

        case BOOKKEEPING_DELETERECORDITEM:
            recordToTime = bookKeeping[currentDate];
            let index = recordToTime.findIndex(item => item.id === action.id);
            recordToTime.splice(index, 1);
            bookKeeping[currentDate] = recordToTime;
            sessionStorage.setItem("bookKeeping", stringify(fromJS(bookKeeping)));
            return state.set("bookKeeping", fromJS(bookKeeping));

        case BOOKKEEPING_SETEDITRECORDITEM:
            return state.set("currentEditRecord", action.record);

        case BOOKKEEPING_EDITSUCCESS:
            //如果编辑的把时间修改，则删除之前编辑的那条记录
            if (action.record.time !== currentDate) {
                recordToTime = bookKeeping[currentDate];
                let index = recordToTime.findIndex(item => item.id === action.record.id);
                recordToTime.splice(index, 1);
                bookKeeping[currentDate] = recordToTime;
            }
            let record = action.record;
            let recordToTime2 = bookKeeping[record.time];
            //如果编辑的把时间修改，则新增该条记录
            if (record.time !== currentDate) {
                if (recordToTime2) {
                    recordToTime2.push({
                        way: record.way,
                        wayType: record.wayType,
                        title: record.title,
                        money: record.money,
                        id: record.id,
                    });
                } else {
                    recordToTime2 = [{
                        way: record.way,
                        wayType: record.wayType,
                        title: record.title,
                        money: record.money,
                        id: record.id,
                    }]
                }
            } else {
                recordToTime2.map(item => {
                    if (item.id === record.id) {
                        item.way = record.way;
                        item.wayType = record.wayType;
                        item.title = record.title;
                        item.money = record.money;
                    }
                });
            }

            bookKeeping[record.time] = recordToTime2;
            sessionStorage.setItem("bookKeeping", stringify(fromJS(bookKeeping)));
            return state.merge({
                bookKeeping: fromJS(bookKeeping),
                currentEditRecord: null
            });
        default:
            return state;
    }
}