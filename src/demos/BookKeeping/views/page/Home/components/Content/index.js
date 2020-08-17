import React, { PureComponent, createRef } from "react";
import echarts from "echarts";
import {
	ContentWrapper,
	Tabs,
	CreateNewRecord,
	BookKeepingRecord,
	BookKeepingRecordItem,
	PictureWrapper,
	Ball,
} from "./style";
import { Link } from "react-router-dom";
import { Empty } from "antd";
import { withRouter } from "react-router-dom";

const nameToIcon = {
	餐饮: "&#xe656;",
	电子: "&#xe62a;",
	购物: "&#xe7ee;",
	交通: "&#xe7ed;",
	住房: "&#xe653;",
	居家: "&#xe645;",
	日用品: "&#xe612;",
	学习: "&#xe7f1;",
	服饰: "&#xe617;",
	工资: "&#xe65c;",
	兼职: "&#xe61d;",
	理财: "&#xe623;",
};

class Content extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			mode: "列表模式",
		};
		this.incomeRef = createRef(null);
		this.expenditureRef = createRef(null);
		this.incomeChart = null;
		this.expenditureChart = null;
	}

	editStart = (item) => {
		this.props.setEditRecordItem(item);
		this.props.history.push("/BookKeeping/Edit");
	};

	setMode = (mode) => {
		this.setState(
			{
				mode,
			},
			() => {
				if (mode === "图表模式") {
					this.incomeChart = echarts.init(this.incomeRef.current);
					this.expenditureChart = echarts.init(
						this.expenditureRef.current,
					);
					let food = {
						name: "餐饮",
						value: 0,
					};
					let electron = {
						name: "电子",
						value: 0,
					};
					let shopping = {
						name: "购物",
						value: 0,
					};
					let traffic = {
						name: "交通",
						value: 0,
					};
					let housing = {
						name: "住房",
						value: 0,
					};
					let home = {
						name: "居家",
						value: 0,
					};
					let dailyNecessities = {
						name: "日用品",
						value: 0,
					};
					let study = {
						name: "学习",
						value: 0,
					};
					let apparel = {
						name: "服饰",
						value: 0,
					};
					let wage = {
						name: "工资",
						value: 0,
					};
					let partTime = {
						name: "兼职",
						value: 0,
					};
					let financialManagement = {
						name: "理财",
						value: 0,
					};
					let data = this.props.bookKeeping.get(
						this.props.currentDate,
					);
					if (data) {
						data.map((item) => {
							if (item.get("wayType") === food.name) {
								food.value += parseFloat(item.get("money"));
							}
							if (item.get("wayType") === electron.name) {
								electron.value += parseFloat(item.get("money"));
							}
							if (item.get("wayType") === shopping.name) {
								shopping.value += parseFloat(item.get("money"));
							}
							if (item.get("wayType") === traffic.name) {
								traffic.value += parseFloat(item.get("money"));
							}
							if (item.get("wayType") === housing.name) {
								housing.value += parseFloat(item.get("money"));
							}
							if (item.get("wayType") === home.name) {
								home.value += parseFloat(item.get("money"));
							}
							if (item.get("wayType") === dailyNecessities.name) {
								dailyNecessities.value += parseFloat(
									item.get("money"),
								);
							}
							if (item.get("wayType") === study.name) {
								study.value += parseFloat(item.get("money"));
							}
							if (item.get("wayType") === apparel.name) {
								apparel.value += parseFloat(item.get("money"));
							}
							if (item.get("wayType") === wage.name) {
								wage.value += parseFloat(item.get("money"));
							}
							if (item.get("wayType") === partTime.name) {
								partTime.value += parseFloat(item.get("money"));
							}
							if (
								item.get("wayType") === financialManagement.name
							) {
								financialManagement.value += parseFloat(
									item.get("money"),
								);
							}
						});
					}
					this.setOption(this.incomeChart, "本月收入", [
						wage,
						partTime,
						financialManagement,
					]);
					this.setOption(this.expenditureChart, "本月支出", [
						food,
						electron,
						shopping,
						traffic,
						housing,
						home,
						dailyNecessities,
						study,
						apparel,
					]);
				}
			},
		);
	};

	setOption = (obj, name, data) => {
		obj.setOption({
			tooltip: {
				trigger: "item",
				formatter: "{a} <br/>{b} : {c} ({d}%)",
			},
			series: [
				{
					name,
					type: "pie",
					radius: "55%",
					center: ["50%", "60%"],
					data,
					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: "rgba(0, 0, 0, 0.5)",
						},
					},
				},
			],
			color: ["#f66bbf", "#3cb2ef", "#71f6f9", "#ffdb5c", "#ff9f7f"],
		});
	};

	render() {
		const { mode } = this.state;
		const { currentDate, bookKeeping, deleteRecordItem } = this.props;

		let data = bookKeeping.get(currentDate);
		return (
			<ContentWrapper>
				<Tabs>
					<div
						className={mode === "列表模式" ? "select" : ""}
						onClick={() => this.setMode("列表模式")}
					>
						<i className="iconfont">&#xe660;</i>
						列表模式
					</div>
					<div
						className={mode === "图表模式" ? "select" : ""}
						onClick={() => this.setMode("图表模式")}
					>
						<i className="iconfont">&#xe60d;</i>
						图表模式
					</div>
				</Tabs>
				<Link to="/BookKeeping/Edit">
					<CreateNewRecord>创建新的记账记录</CreateNewRecord>
				</Link>
				{mode === "列表模式" && (
					<BookKeepingRecord>
						{data ? (
							data.map((item) => {
								return (
									<BookKeepingRecordItem key={item.get("id")}>
										<div className="item-icon">
											<i
												className="iconfont"
												dangerouslySetInnerHTML={{
													__html:
														nameToIcon[
															item.get("wayType")
														],
												}}
											></i>
										</div>
										<div className="item-text">
											{item.get("title")}
										</div>
										<div className="item-money">{`${
											item.way === "expenditure"
												? "-"
												: ""
										}${item.get("money")}元`}</div>
										<div className="item-time">
											{currentDate}
										</div>
										<div className="item-operate">
											<i
												className="iconfont"
												onClick={() =>
													this.editStart(item)
												}
											>
												&#xe628;
											</i>
											<i
												className="iconfont"
												onClick={() =>
													deleteRecordItem(
														item.get("id"),
													)
												}
											>
												&#xe747;
											</i>
										</div>
									</BookKeepingRecordItem>
								);
							})
						) : (
							<Empty style={{ marginTop: "50px" }} />
						)}
					</BookKeepingRecord>
				)}
				{mode === "图表模式" && (
					<PictureWrapper>
						<div className="pic-income">
							<div className="title">本月收入</div>
							<Ball ref={this.incomeRef}></Ball>
						</div>
						<div className="pic-expenditure">
							<div className="title">本月支出</div>
							<Ball ref={this.expenditureRef}></Ball>
						</div>
					</PictureWrapper>
				)}
			</ContentWrapper>
		);
	}
}

export default withRouter(Content);
