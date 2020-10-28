import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const titleLinks = [
	{
		url: "/g6try",
		name: "g6的demo",
		visible: true,
	},
	{
		url: "/init",
		name: "Init",
		visible: false,
		describe: "涉及ui泄露",
	},
	{
		url: "/routingreference",
		name: "路由传参",
		visible: true,
	},
	{
		url: "/counter",
		name: "计数器",
		visible: true,
	},
	{
		url: "/refdemo",
		name: "ref使用例子",
		visible: true,
	},
	{
		url: "/echartstest",
		name: "echarts练习",
		visible: true,
	},
	{
		url: "/tabledemo",
		name: "Table数据长度过长(bug重现)",
		visible: true,
	},
	{
		url: "/demo",
		name: "常规demo测试",
		visible: true,
	},
	{
		url: "/motiondemo",
		name: "动画尝试",
		visible: true,
	},
	{
		url: "/automenu",
		name: "动态菜单",
		visible: true,
	},
	{
		url: "/reacthookdemo",
		name: "React Hook尝试",
		visible: true,
	},
	{
		url: "/splitpanel",
		name: "拆分面板组件",
		visible: true,
	},
	{
		url: "/meta",
		name: "更改页面meta属性",
		visible: true,
	},
	{
		url: "/mousetracker",
		name: "猫猫跟踪鼠标位置（render props实践）",
		visible: true,
	},
	{
		url: "/longtable",
		name: "table demo",
		visible: true,
	},
	{
		url: "/reactdocument",
		name: "react文档学习",
		visible: true,
	},
	{
		url: "/drag",
		name: "拖动",
		visible: true,
	},
	{
		url: "/handsontableTry",
		name: "handsontable尝试",
		visible: true,
	},
	{
		url: "/pureOrMemoTest",
		name: "PureComponent和memo功能尝试",
		visible: true,
	},
	{
		url: "/dynamictab",
		name: "动态多tab页面",
		visible: true,
	},
	{
		url: "/reactTransitionGroup",
		name: "reactTransitionGroup使用示例",
		visible: true,
	},
	{
		url: "/todolist",
		name: "todolist",
		visible: true,
	},
	{
		url: "/SvgAnimal",
		name: "SvgAnimal",
		visible: true,
	},
	{
		url: "/ShortBook",
		name: "ShortBook",
		visible: true,
	},
	{
		url: "/BookKeeping",
		name: "记账",
		visible: true,
	},
	{
		url: "/ReactDnDStudy",
		name: "ReactDnD学习",
		visible: true,
	},
	{
		url: "/TabsContext",
		name: "右键tabs组件",
		visible: true,
	},
	{
		url: "/CurcorInsert",
		name: "光标插入",
		visible: true,
	},
];
export default () => (
	<div className="home">
		<h1>demo-lists：</h1>
		<ul>
			{titleLinks.map((item) => {
				if (item.visible) {
					return (
						<li key={item.url}>
							<Link to={item.url}>{item.name}</Link>
						</li>
					);
				}
			})}
		</ul>
	</div>
);
