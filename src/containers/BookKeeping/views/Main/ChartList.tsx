import React, { memo, useRef, useEffect, FC } from "react";
import { PictureWrapper, Ball } from "./ChartListStyles";
import echarts from "echarts";
import utils from "@/utils";
import NP from "number-precision";
import { Record } from "@/containers/BookKeeping/types";

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

type Props = {
	accountingRecords: Record[];
};

const ChartList: FC<Props> = (props) => {
	const incomeRef = useRef(null);
	const expenditureRef = useRef(null);
	let incomeChart = null;
	let expenditureChart = null;

	// @ts-ignore
	const setOption = (chart, name: string, data: Object[]) => {
		chart.setOption({
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

	useEffect(() => {
		incomeChart = echarts.init(incomeRef.current);
		expenditureChart = echarts.init(expenditureRef.current);

		let data = props.accountingRecords;
		if (utils.isExistent(data)) {
			data.forEach((item) => {
				if (item.wayType === food.name) {
					food.value = NP.plus(food.value, item.money);
				}
				if (item.wayType === electron.name) {
					electron.value = NP.plus(electron.value, item.money);
				}
				if (item.wayType === shopping.name) {
					shopping.value = NP.plus(shopping.value, item.money);
				}
				if (item.wayType === traffic.name) {
					traffic.value = NP.plus(traffic.value, item.money);
				}
				if (item.wayType === housing.name) {
					housing.value = NP.plus(housing.value, item.money);
				}
				if (item.wayType === home.name) {
					home.value = NP.plus(home.value, item.money);
				}
				if (item.wayType === dailyNecessities.name) {
					dailyNecessities.value = NP.plus(
						dailyNecessities.value,
						item.money,
					);
				}
				if (item.wayType === study.name) {
					study.value = NP.plus(study.value, item.money);
				}
				if (item.wayType === apparel.name) {
					apparel.value = NP.plus(apparel.value, item.money);
				}
				if (item.wayType === wage.name) {
					wage.value = NP.plus(wage.value, item.money);
				}
				if (item.wayType === partTime.name) {
					partTime.value = NP.plus(partTime.value, item.money);
				}
				if (item.wayType === financialManagement.name) {
					financialManagement.value = NP.plus(
						financialManagement.value,
						item.money,
					);
				}
			});
		}
		wage.value = NP.round(wage.value, 2);
		partTime.value = NP.round(partTime.value, 2);
		financialManagement.value = NP.round(financialManagement.value, 2);
		food.value = NP.round(food.value, 2);
		electron.value = NP.round(electron.value, 2);
		shopping.value = NP.round(shopping.value, 2);
		traffic.value = NP.round(traffic.value, 2);
		housing.value = NP.round(housing.value, 2);
		home.value = NP.round(home.value, 2);
		dailyNecessities.value = NP.round(dailyNecessities.value, 2);
		study.value = NP.round(study.value, 2);
		apparel.value = NP.round(apparel.value, 2);
		setOption(incomeChart, "本月收入", [
			wage,
			partTime,
			financialManagement,
		]);
		setOption(expenditureChart, "本月支出", [
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
		return () => {
			incomeChart = null;
			expenditureChart = null;
			food = {
				name: "餐饮",
				value: 0,
			};
			electron = {
				name: "电子",
				value: 0,
			};
			shopping = {
				name: "购物",
				value: 0,
			};
			traffic = {
				name: "交通",
				value: 0,
			};
			housing = {
				name: "住房",
				value: 0,
			};
			home = {
				name: "居家",
				value: 0,
			};
			dailyNecessities = {
				name: "日用品",
				value: 0,
			};
			study = {
				name: "学习",
				value: 0,
			};
			apparel = {
				name: "服饰",
				value: 0,
			};
			wage = {
				name: "工资",
				value: 0,
			};
			partTime = {
				name: "兼职",
				value: 0,
			};
			financialManagement = {
				name: "理财",
				value: 0,
			};
		};
	});
	return (
		<PictureWrapper>
			<div className="pic-income">
				<div className="title">本月收入</div>
				<Ball ref={incomeRef}></Ball>
			</div>
			<div className="pic-expenditure">
				<div className="title">本月支出</div>
				<Ball ref={expenditureRef}></Ball>
			</div>
		</PictureWrapper>
	);
};

export default memo(ChartList);
