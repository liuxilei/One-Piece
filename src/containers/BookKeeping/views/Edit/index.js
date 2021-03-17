import React, { memo } from "react";
import { ButtonWrapper, OperateButton } from "./style";
import {
	addRecord,
	editSuccess,
	wayChange,
	setEditRecordItem,
} from "@/containers/BookKeeping/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { AppWrap } from "@/containers/BookKeeping/styles";
import TabChange from "@/containers/BookKeeping/components/TabChange";
import TypeWays from "./TypeWays";
import Form from "./Form";
import { message } from "antd";
import shortid from "shortid";

const Edit = memo((props) => {
	const {
		way,
		wayChange,
		currentEditRecord,
		setEditRecordItem,
		history,
		addRecord,
		editSuccess,
	} = props;
	const { wayType, title, money, time } = currentEditRecord;

	//修改表单数据
	const editRecordChange = (type, value) => {
		let newRecord = { ...currentEditRecord };
		newRecord[type] = value;
		setEditRecordItem(newRecord);
	};

	const submit = () => {
		let id,
			isEdit = false;
		if (currentEditRecord.id) {
			isEdit = true;
		} else {
			id = shortid.generate();
		}
		if (!wayType) {
			message.warning("请选择类型");
			return;
		}
		if (!title || !money || !time) {
			message.warning("数据信息未填完整!");
			return;
		}
		if (isEdit) {
			editSuccess({
				id,
				way,
				wayType,
				title,
				money,
				time,
			});
		} else {
			addRecord({
				id,
				way,
				wayType,
				title,
				money,
				time,
			});
		}
		routerChange();
	};

	const cancel = () => {
		setEditRecordItem({});
		routerChange();
	};

	const routerChange = () => {
		history.push("/BookKeeping");
	};

	return (
		<AppWrap>
			<TabChange
				type={way}
				leftType="expenditure"
				rightType="income"
				onClick={wayChange}
				leftChildren="支出"
				rightChildren="收入"
			/>
			<TypeWays
				way={way}
				wayType={wayType}
				editRecordChange={editRecordChange}
			/>
			<Form
				editRecordChange={editRecordChange}
				title={title}
				money={money}
				time={time}
			/>
			<ButtonWrapper>
				<OperateButton className="primary" onClick={submit}>
					提交
				</OperateButton>
				<OperateButton onClick={cancel}>取消</OperateButton>
			</ButtonWrapper>
		</AppWrap>
	);
});

const mapStateToProps = ({ BookKeeping }) => ({
	currentEditRecord: BookKeeping.currentEditRecord,
	currentDate: BookKeeping.currentDate,
	way: BookKeeping.way,
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			addRecord,
			editSuccess,
			wayChange,
			setEditRecordItem,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
