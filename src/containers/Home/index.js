import { Link } from "react-router-dom";
import styles from "./index.less";

const titleLinks = [
	{
		url: "/BookKeeping",
		name: "记账",
		visible: true,
	},
	{
		url: "/todolist",
		name: "todoList",
		visible: true,
	},
	{
		url: "/g6try",
		name: "G6学习",
		visible: true,
	},
	{
		url: "/relationalExpression",
		name: "关系表达式",
		visible: true,
	},
	{
		url: "/ExpressionRemake",
		name: "表达式重置版（react-dnd）",
		visible: false,
	},
	{
		url: "/init",
		name: "Init",
		visible: false,
	},
	{
		url: "/counter",
		name: "计数器",
		visible: true,
	},
	{
		url: "/echartstest",
		name: "echarts",
		visible: true,
	},
	{
		url: "/mousetracker",
		name: "猫猫跟踪鼠标位置（render props实践）",
		visible: true,
	},
	{
		url: "/drag",
		name: "HTML5拖动示范",
		visible: true,
	},
	{
		url: "/dynamictab",
		name: "动态多tab页面",
		visible: true,
	},
	{
		url: "/SvgAnimal",
		name: "svg动画(点击按钮触发)",
		visible: true,
	},
	{
		url: "/ShortBook",
		name: "简书项目",
		visible: true,
	},
	{
		url: "/ReactDnDStudy",
		name: "ReactDnD示例",
		visible: true,
	},
];
export default () => (
	<div className={styles.home}>
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
