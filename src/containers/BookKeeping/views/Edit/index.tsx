import React, { memo, FC } from "react";
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
import {
	Record,
	BookKeepingActions,
	Way,
} from "@/containers/BookKeeping/types";
import { RouteComponentProps } from "react-router-dom";
import TypeWays from "./TypeWays";
import Form from "./Form";
import { message } from "antd";
import shortid from "shortid";
import { Dispatch } from "redux";
import { AppState } from "@/store";

interface Props extends RouteComponentProps {
	way: Way;
	wayChange: (way: Way) => BookKeepingActions;
	currentEditRecord: Record;
	setEditRecordItem: (record: Record) => BookKeepingActions;
	addRecord: (record: Record) => BookKeepingActions;
	editSuccess: (record: Record) => BookKeepingActions;
}

const Edit: FC<Props> = memo((props) => {
	const {
		way,
		wayChange,
		currentEditRecord,
		setEditRecordItem,
		addRecord,
		editSuccess,
		history,
	} = props;
	const { wayType, title, money, time } = currentEditRecord;

	//修改表单数据
	const editRecordChange = (type: string, value: string) => {
		interface Map {
			[key: string]: string | undefined;
		}
		let newRecord: Map = { ...currentEditRecord };
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

const mapStateToProps = ({ BookKeeping }: AppState) => ({
	currentEditRecord: BookKeeping.currentEditRecord,
	currentDate: BookKeeping.currentDate,
	way: BookKeeping.way,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
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
