import React, { memo } from "react";
import Header from "./Header";
import Content from "./Content";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
	setCurrentDate,
	deleteRecordItem,
	setEditRecordItem,
} from "@/containers/BookKeeping/actions";
import utils from "@/utils";

const BookKeeping = memo((props) => {
	const {
		setCurrentDate,
		currentDate,
		bookKeeping,
		deleteRecordItem,
		setEditRecordItem,
	} = props;
	//当前时间的记账记录
	const accountingRecords = utils.isExistent(currentDate)
		? bookKeeping.filter((item) => item.time === currentDate)
		: [];
	return (
		<div>
			<Header
				currentDate={currentDate}
				setCurrentDate={setCurrentDate}
				accountingRecords={accountingRecords}
			/>
			<Content
				currentDate={currentDate}
				deleteRecordItem={deleteRecordItem}
				setEditRecordItem={setEditRecordItem}
				accountingRecords={accountingRecords}
			/>
		</div>
	);
});

const mapStateToProps = ({ BookKeeping }) => ({
	currentDate: BookKeeping.currentDate,
	bookKeeping: BookKeeping.bookKeeping,
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			setCurrentDate,
			deleteRecordItem,
			setEditRecordItem,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(BookKeeping);
