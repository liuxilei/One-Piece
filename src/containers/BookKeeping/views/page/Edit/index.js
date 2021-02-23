import React, { PureComponent } from "react";
import {
	EditWrapper,
	Tabs,
	TypeWays,
	TypeWaysItem,
	FormLayout,
	ButtonWrapper,
	OperateButton,
} from "./style";
import { Link } from "react-router-dom";
import { DatePicker } from "antd";
import moment from "moment";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addRecord, editSuccess } from "../../../actions";
import { message } from "antd";
import shortid from "shortid";

const dateFormat = "YYYY/MM/DD";

const typeList = {
	//支出
	expenditure: [
		{
			name: "餐饮",
			unicode: "&#xe656;",
			select: true,
		},
		{
			name: "电子",
			unicode: "&#xe62a;",
		},
		{
			name: "购物",
			unicode: "&#xe7ee;",
		},
		{
			name: "交通",
			unicode: "&#xe7ed;",
		},

		{
			name: "住房",
			unicode: "&#xe653;",
		},
		{
			name: "居家",
			unicode: "&#xe645;",
		},
		{
			name: "日用品",
			unicode: "&#xe612;",
		},
		{
			name: "学习",
			unicode: "&#xe7f1;",
		},
		{
			name: "服饰",
			unicode: "&#xe617;",
		},
	],
	income: [
		{
			name: "工资",
			unicode: "&#xe65c;",
		},
		{
			name: "兼职",
			unicode: "&#xe61d;",
		},
		{
			name: "理财",
			unicode: "&#xe623;",
		},
	],
};

class Edit extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			way: "expenditure", //expenditure:支出 income:收入
			wayType: "餐饮",
			title: "",
			money: "",
			time: null,
		};
	}

	currySetState = (key, value) => {
		let result = {
			[key]: value,
		};
		if (key === "way" && value === "expenditure") {
			Object.assign(result, {
				wayType: "餐饮",
			});
		}
		if (key === "way" && value === "income") {
			Object.assign(result, {
				wayType: "工资",
			});
		}
		this.setState(result);
	};

	submit = () => {
		const { way, wayType, title, money, time } = this.state;
		let id;
		let isEdit = false;
		if (
			this.props.currentEditRecord &&
			this.props.currentEditRecord.get("id")
		) {
			id = this.props.currentEditRecord.get("id");
			isEdit = true;
		} else {
			id = shortid.generate();
		}
		if (!title || !money || !time) {
			message.warning("数据信息未填完整!");
			return;
		}
		if (isEdit) {
			this.props.editSuccess({
				id,
				way,
				wayType,
				title,
				money,
				time,
			});
		} else {
			this.props.addRecord({
				id,
				way,
				wayType,
				title,
				money,
				time,
			});
		}
		this.props.history.push("/BookKeeping");
	};

	componentDidMount() {
		const { currentEditRecord, currentDate } = this.props;
		if (currentEditRecord) {
			this.setState({
				way: currentEditRecord.get("way"),
				wayType: currentEditRecord.get("wayType"),
				title: currentEditRecord.get("title"),
				money: currentEditRecord.get("money"),
				time: currentDate,
			});
		}
	}

	render() {
		const { way, wayType, title, money, time } = this.state;
		return (
			<EditWrapper>
				<Tabs>
					<div
						className={`${way === "expenditure" ? "select" : ""}`}
						onClick={() => this.currySetState("way", "expenditure")}
					>
						支出
					</div>
					<div
						className={`${way === "income" ? "select" : ""}`}
						onClick={() => this.currySetState("way", "income")}
					>
						收入
					</div>
				</Tabs>
				<TypeWays>
					{typeList[way].map((item) => {
						return (
							<TypeWaysItem
								key={item.name}
								onClick={() =>
									this.currySetState("wayType", item.name)
								}
							>
								<div
									className={`icon ${
										item.name === wayType ? "select" : ""
									}`}
								>
									<i
										className="iconfont"
										dangerouslySetInnerHTML={{
											__html: item.unicode,
										}}
									></i>
								</div>
								<div className="name">{item.name}</div>
							</TypeWaysItem>
						);
					})}
				</TypeWays>
				<FormLayout>
					<div className="attribute">标题*：</div>
					<div className="input">
						<input
							placeholder="请输入标题"
							className="normal"
							value={title}
							onChange={(e) =>
								this.currySetState("title", e.target.value)
							}
						/>
					</div>
				</FormLayout>
				<FormLayout>
					<div className="attribute">金额*：</div>
					<div className="input">
						<input
							placeholder="请输入金额"
							value={money}
							className="normal"
							onChange={(e) =>
								this.currySetState("money", e.target.value)
							}
						/>
					</div>
				</FormLayout>
				<FormLayout>
					<div className="attribute">日期*：</div>
					<div className="input">
						<DatePicker
							value={time ? moment(time, dateFormat) : null}
							format={dateFormat}
							className="date"
							onChange={(date, dateString) =>
								this.currySetState("time", dateString)
							}
						/>
					</div>
				</FormLayout>
				<ButtonWrapper>
					<OperateButton className="primary" onClick={this.submit}>
						提交
					</OperateButton>
					<Link to="/BookKeeping">
						<OperateButton>取消</OperateButton>
					</Link>
				</ButtonWrapper>
			</EditWrapper>
		);
	}
}

const mapStateToProps = ({ BookKeeping }) => ({
	currentEditRecord: BookKeeping.get("currentEditRecord"),
	currentDate: BookKeeping.get("currentDate"),
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			addRecord,
			editSuccess,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
