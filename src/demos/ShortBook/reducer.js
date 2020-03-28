import {
    SHORTBOOK_SETNAVSEARCHFOCUS,
    SHORTBOOK_SETLIST,
    SHORTBOOK_MOUSEENTER,
    SHORTBOOK_MOUSELEAVE,
    SHORTBOOK_CHANGEPAGE,
    SHORTBOOK_SETHOMEINFO,
    SHORTBOOK_ADDMORELIST,
    SHORTBOOK_CHANGESHOWSCROLL,
    SHORTBOOK_SETDETAILINFO,
    SHORTBOOK_LOGINSUCCESS,
    SHORTBOOK_LOGINOUT,
} from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1,
    topicList: [], 
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false,
    detailInfo: {
        titile: "",
        content: ""
    },
    login: false,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case SHORTBOOK_SETNAVSEARCHFOCUS: {
            return state.set("focused", action.focused);
        }
        case SHORTBOOK_SETLIST: {
            // return state.set("list", action.list)
            //             .set("totalPage", action.totalPage);
            return state.merge({
                list: action.list,
                totalPage: action.totalPage
            });
        }
        case SHORTBOOK_MOUSEENTER: {
            return state.set("mouseIn", true);
        }
        case SHORTBOOK_MOUSELEAVE: {
            return state.set("mouseIn", false);
        }
        case SHORTBOOK_CHANGEPAGE: {
            return state.set("page", action.page);
        }
        case SHORTBOOK_SETHOMEINFO: {
            return state.merge({
                topicList: action.data.get("topicList"),
                articleList: action.data.get("articleList"),
                recommendList: action.data.get("recommendList")
            });
        }
        case SHORTBOOK_ADDMORELIST: {
            return state.merge({
                articleList: state.get("articleList").concat(action.list),
                articlePage: action.articlePage
            });
        }
        case SHORTBOOK_CHANGESHOWSCROLL: {
            return state.set("showScroll", action.showScroll);
        }
        case SHORTBOOK_SETDETAILINFO: {
            return state.set("detailInfo", action.detailInfo);
        }
        case SHORTBOOK_LOGINSUCCESS: {
            return state.set("login", true);
        }
        case SHORTBOOK_LOGINOUT: {
            return state.set("login", false);
        }
        default:
            return state;
    }
}