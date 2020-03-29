import React, { memo } from "react";
import {
    HeaderWrapper,
    HeaderInfo,
} from "./style";
import { DatePicker } from 'antd';
import moment from "moment";

const dateFormat = 'YYYY/MM/DD';

const Header = memo((props) => {
    const {
        bookKeeping,
        currentDate, 
        setCurrentDate,
    } = props;
    let income = 0;
    let expenditure = 0;
    let data = bookKeeping.get(currentDate);
    if (data) {
        data.map(item => {
            let money = item.get("money");
            let way = item.get("way");
            if (way === "income") {
                income += parseFloat(money);
            }
            income = Math.floor(income * 100) / 100;
            if (way === "expenditure") {
                expenditure += parseFloat(money)
            }
            expenditure = Math.floor(expenditure * 100) / 100;
        });
    }

    return (
        <HeaderWrapper>
            <h1>记账</h1>
            <HeaderInfo>
                <DatePicker 
                    value={currentDate ? moment(currentDate, dateFormat) : null}
                    onChange={(date, dateString) => setCurrentDate(dateString)} 
                    className="date"
                    format={dateFormat}
                    />
                <span className="income">收入：{income}</span>
                <span className="expenditure">支出：{expenditure}</span>
            </HeaderInfo>
        </HeaderWrapper>
    )
});

export default Header;