import React, { Component, createRef, Fragment } from "react";
import echarts from "echarts";

class EchartsTest extends Component {
	constructor(props) {
		super(props);
		this.echartDom = createRef();
		this.myChart = null;
	}

	componentDidMount() {
		this.myChart = echarts.init(this.echartDom.current);
		this.myChart.setOption({
			title: {
				text: "One-Piece",
				show: true,
				link: "https://www.baidu.com",
				target: "self",
				textStyle: {
					color: "#000",
					fontStyle: "normal",
					fontWeight: "bold",
				},
				subtext: "我是要成为海贼王的男人！",
				left: "center",
			},
			tooltip: {},
			xAxis: {
				type: "category",
				data: ["路飞", "山治", "索隆", "娜美", "乔巴", "罗宾"],
				position: "bottom",
				name: "人物",
				nameLocation: "end",
				boundaryGap: true,
				//inverse: true, //反向
			},
			yAxis: {
				name: "这是y轴",
				nameLocation: "end",
			},
			series: [
				{
					name: "实力值",
					type: "bar",
					data: [80, 75, 60, 55, 50, 60],
				},
			],
			legend: {
				//type: 'plain',
				bottom: 0,
				left: "center",
				formatter: function (name) {
					return echarts.format.truncateText(
						name,
						20,
						"14px Microsoft Yahei",
						"…",
					);
				},
				tooltip: {
					show: true,
				},
			},
		});
	}

	render() {
		return (
			<Fragment>
				<div
					ref={this.echartDom}
					style={{ width: "400px", height: "400px" }}
				></div>
			</Fragment>
		);
	}
}

export default EchartsTest;
