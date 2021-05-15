import { Suspense, lazy } from "react";
import {
	HashRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Home from "@/containers/Home";
import G6Try from "@/containers/G6Try";
import EchartsTest from "@/containers/EchartsTest";
import MouseTracker from "@/containers/MouseTracker";
import Drag from "@/containers/Drag";
import JoinInstance from "@/containers/G6Try/JoinInstance";
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
import ProjectList from "@/containers/ProjectList";
import HookDemo from "@/containers/HookDemo";
import HookTest from "@/containers/HookTest";
import AntdMobile from "@/containers/AntdMobile";
import Test from "@/containers/Test";

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
		exact: true,
	},
	{
		path: "/counter",
		component: Counter,
		exact: true,
	},
	{
		path: "/echartstest",
		component: EchartsTest,
		exact: true,
	},
	{
		path: "/mousetracker",
		component: MouseTracker,
		exact: true,
	},
	{
		path: "/drag",
		component: Drag,
		exact: true,
	},
	{
		path: "/joininstance",
		component: JoinInstance,
		exact: true,
	},
	{
		path: "/relationalExpression",
		component: RelationalExpression,
		exact: true,
	},
	{
		path: "/ExpressionRemake",
		component: ExpressionRemake,
		exact: true,
	},
	{
		path: "/dynamictab",
		component: DynamicTab,
		exact: false,
	},
	{
		path: "/todolist",
		component: TodoList,
		exact: true,
	},
	{
		path: "/SvgAnimal",
		component: SvgAnimal,
		exact: true,
	},
	{
		path: "/ShortBook",
		component: ShortBook,
		exact: true,
	},
	{
		path: "/BookKeeping",
		component: BookKeeping,
		exact: true,
	},
	{
		path: "/ReactDnDStudy",
		component: ReactDnDStudy,
		exact: true,
	},
	{
		path: "/ProjectList",
		component: ProjectList,
		exact: true,
	},
	{
		path: "/HookDemo",
		component: HookDemo,
		exact: true,
	},
	{
		path: "/HookTest",
		component: HookTest,
		exact: true,
	},
	{
		path: "/AntdMobile",
		component: AntdMobile,
		exact: true,
	},
	{
		path: "/Test",
		component: Test,
		exact: true,
	},
	{
		path: "/404",
		component: NotFind,
		exact: true,
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
