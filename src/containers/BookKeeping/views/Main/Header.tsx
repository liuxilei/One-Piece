import React, { memo, FC } from "react";
import { HeaderWrapper, HeaderInfo } from "./HeaderStyles";
import { DatePicker } from "antd";
import moment from "moment";
import NP from "number-precision";
import utils from "@/utils";
import { Record, BookKeepingActions } from "@/containers/BookKeeping/types";

const dateFormat = "YYYY/MM/DD";

type Props = {
	accountingRecords: Record[];
	currentDate: string;
	setCurrentDate: (currentDate: string) => BookKeepingActions;
};

const Header: FC<Props> = memo((props) => {
	const { accountingRecords, currentDate, setCurrentDate } = props;
	//收入
	let income = 0;
	//支出
	let expenditure = 0;
	if (utils.isExistent(accountingRecords)) {
		accountingRecords.forEach((item) => {
			if (item.way === "income") {
				income = NP.plus(income, item.money);
			}
			income = NP.round(income, 2);
			if (item.way === "expenditure") {
				expenditure = NP.plus(expenditure, item.money);
			}
			expenditure = NP.round(expenditure, 2);
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
	);
});

export default Header;
