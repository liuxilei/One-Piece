import {
    SHORTBOOK_SETNAVSEARCHFOCUS,
    SHORTBOOK_GETLIST,
    SHORTBOOK_SETLIST,
    SHORTBOOK_MOUSEENTER,
    SHORTBOOK_MOUSELEAVE,
    SHORTBOOK_CHANGEPAGE,
    SHORTBOOK_GETHOMEINFO,
    SHORTBOOK_SETHOMEINFO,
    SHORTBOOK_GETMORELIST,
    SHORTBOOK_ADDMORELIST,
    SHORTBOOK_CHANGESHOWSCROLL,
    SHORTBOOK_GETDETAILINFO,
    SHORTBOOK_SETDETAILINFO,
    SHORTBOOK_LOGIN,
    SHORTBOOK_LOGINSUCCESS,
    SHORTBOOK_LOGINOUT,
} from "./actionTypes";
import { fromJS } from "immutable";

export const setNavSearchFocus = (focused) => ({
    type: SHORTBOOK_SETNAVSEARCHFOCUS,
    focused
});

export const getList = () => ({
    type: SHORTBOOK_GETLIST
});

export const setList = (list) => ({
    type: SHORTBOOK_SETLIST,
    list: fromJS(list),
    totalPage: Math.ceil(list.length / 10)
});

export const mouseEnter = () => ({
    type: SHORTBOOK_MOUSEENTER,
});

export const mouseLeave = () => ({
    type: SHORTBOOK_MOUSELEAVE,
});
 
export const changePage = (page) => ({
    type: SHORTBOOK_CHANGEPAGE,
    page
});

export const getHomeInfo = () => ({
    type: SHORTBOOK_GETHOMEINFO
});

export const setHomeInfo = (data) => ({
    type: SHORTBOOK_SETHOMEINFO,
    data: fromJS(data),
});

export const getMoreList = (articlePage) => ({
    type: SHORTBOOK_GETMORELIST,
    articlePage
});

export const addNewList = (list, articlePage) => ({
    type: SHORTBOOK_ADDMORELIST,
    list: fromJS(list),
    articlePage,
});

export const changeShowScroll = (showScroll) => ({
    type: SHORTBOOK_CHANGESHOWSCROLL,
    showScroll
});

export const getDetailInfo = (id) => ({
    type: SHORTBOOK_GETDETAILINFO,
    id
});

export const setDetailInfo = (detailInfo) => ({
    type: SHORTBOOK_SETDETAILINFO,
    detailInfo: fromJS(detailInfo)
});

export const login = (account, password) => ({
    type: SHORTBOOK_LOGIN,
    account,
    password,
});

export const loginSuccess = () => ({
    type: SHORTBOOK_LOGINSUCCESS,
});

export const loginOut = () => ({
    type: SHORTBOOK_LOGINOUT,
})