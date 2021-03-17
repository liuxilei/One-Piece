import React, { memo } from "react";
import Header from "./Header";
import CreateButton from "./CreateButton";
import RecordList from "./RecordList";
import ChartList from "./ChartList";
import TabChange from "@/containers/BookKeeping/components/TabChange";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
	setCurrentDate,
	deleteRecordItem,
	setEditRecordItem,
	modeChange,
	wayChange,
} from "@/containers/BookKeeping/actions";
import { AppWrap } from "@/containers/BookKeeping/styles";
import utils from "@/utils";

const BookKeeping = memo((props) => {
	const {
		setCurrentDate,
		currentDate,
		bookKeeping,
		deleteRecordItem,
		setEditRecordItem,
		mode,
		modeChange,
		wayChange,
	} = props;
	//当前时间的记账记录
	const accountingRecords = utils.isExistent(currentDate)
		? bookKeeping.filter((item) => item.time === currentDate)
		: [];
	return (
		<AppWrap>
			<Header
				currentDate={currentDate}
				setCurrentDate={setCurrentDate}
				accountingRecords={accountingRecords}
			/>
			<TabChange
				type={mode}
				leftType="list"
				rightType="chart"
				onClick={modeChange}
				leftChildren={
					<>
						<i className="iconfont">&#xe660;</i>列表模式
					</>
				}
				rightChildren={
					<>
						<i className="iconfont">&#xe60d;</i>图表模式
					</>
				}
			/>
			<CreateButton />
			{mode === "list" ? (
				<RecordList
					deleteRecordItem={deleteRecordItem}
					accountingRecords={accountingRecords}
					setEditRecordItem={setEditRecordItem}
					wayChange={wayChange}
				/>
			) : (
				<ChartList accountingRecords={accountingRecords} />
			)}
		</AppWrap>
	);
});

const mapStateToProps = ({ BookKeeping }) => ({
	currentDate: BookKeeping.currentDate,
	bookKeeping: BookKeeping.bookKeeping,
	mode: BookKeeping.mode,
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			setCurrentDate,
			deleteRecordItem,
			setEditRecordItem,
			modeChange,
			wayChange,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(BookKeeping);
