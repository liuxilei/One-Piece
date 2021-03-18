import { Suspense, lazy } from "react";
import {
	HashRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Home from "@/containers/Home";
import G6Demo from "@/containers/G6Try/G6Demo/loadable";
import G6DemoOne from "@/containers/G6Try/G6DemoOne/loadable";
import G6EditorDemo from "@/containers/G6Try/G6EditorDemo/loadable";
import G6Try from "@/containers/G6Try";
import G6DemoThree from "@/containers/G6Try/G6DemoThree/loadable";
import EchartsTest from "@/containers/EchartsTest";
import MouseTracker from "@/containers/MouseTracker";
import Drag from "@/containers/Drag";
import JoinInstance from "@/containers/G6Try/JoinInstance";
// import SvgAnimation from '@/containers/SvgAnimation';
import { view as Init } from "@/containers/Init";
import { view as Counter } from "@/containers/Counter";
import { view as RelationalExpression } from "@/containers/RelationalExpression";
import { view as ExpressionRemake } from "@/containers/ExpressionRemake";
import NotFind from "@/containers/NotFind";
import DynamicTab from "@/containers/DynamicTab";
import { view as TodoList } from "@/containers/TodoList";
import { view as ShortBook } from "@/containers/ShortBook";
import { view as BookKeeping } from "@/containers/BookKeeping";
import SvgAnimal from "@/containers/SvgAnimal";
import ReactDnDStudy from "@/containers/ReactDnDStudy";

// const G6Demo = lazy(() => import("@/containers/G6Try/G6Demo/"));

//路由配置项
const RoutingConfigs = [
	{
		path: "/",
		component: Home,
		exact: true,
	},
	{
		path: "/g6try",
		component: G6Try,
		exact: false,
	},
	{
		path: "/g6demo",
		component: G6Demo,
		exact: false,
	},
	{
		path: "/g6demoone",
		component: G6DemoOne,
		exact: false,
	},
	{
		path: "/g6demo3",
		component: G6DemoThree,
		exact: false,
	},
	{
		path: "/g6editordemo",
		component: G6EditorDemo,
		exact: false,
	},
	{
		path: "/init",
		component: Init,
		exact: false,
	},
	{
		path: "/counter",
		component: Counter,
		exact: false,
	},
	{
		path: "/echartstest",
		component: EchartsTest,
		exact: false,
	},
	{
		path: "/mousetracker",
		component: MouseTracker,
		exact: false,
	},
	{
		path: "/drag",
		component: Drag,
		exact: false,
	},
	{
		path: "/joininstance",
		component: JoinInstance,
		exact: false,
	},
	{
		path: "/relationalExpression",
		component: RelationalExpression,
		exact: false,
	},
	{
		path: "/ExpressionRemake",
		component: ExpressionRemake,
		exact: false,
	},
	{
		path: "/dynamictab",
		component: DynamicTab,
		exact: false,
	},
	{
		path: "/todolist",
		component: TodoList,
		exact: false,
	},
	{
		path: "/SvgAnimal",
		component: SvgAnimal,
		exact: false,
	},
	{
		path: "/ShortBook",
		component: ShortBook,
		exact: false,
	},
	{
		path: "/BookKeeping",
		component: BookKeeping,
		exact: false,
	},
	{
		path: "/ReactDnDStudy",
		component: ReactDnDStudy,
		exact: false,
	},
	{
		path: "/404",
		component: NotFind,
		exact: false,
	},
];

const Routes = () => (
	<Router>
		<Switch>
			{RoutingConfigs.map((item) => {
				return (
					<Route
						key={item.path}
						path={item.path}
						exact={item.exact}
						component={item.component}
					/>
				);
			})}
			<Redirect from="*" to="/404" />
		</Switch>
	</Router>
);

export default Routes;
