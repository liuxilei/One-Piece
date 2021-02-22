import React, { Suspense, lazy } from "react";
import {
	HashRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Home from "@/pages/Home";
import RefDemo from "@/pages/RefDemo";
import G6Demo from "@/pages/G6Try/G6Demo/loadable";
import G6DemoOne from "@/pages/G6Try/G6DemoOne/loadable";
import G6EditorDemo from "@/pages/G6Try/G6EditorDemo/loadable";
import G6Try from "@/pages/G6Try";
import G6DemoThree from "@/pages/G6Try/G6DemoThree/loadable";
import RoutingReference from "@/pages/RoutingReference";
import EchartsTest from "@/pages/EchartsTest";
import TableDemo from "@/pages/TableDemo";
import MotionDemo from "@/pages/Motion";
import ReactHookDemo from "@/pages/ReactHookDemo";
import SplitPanel from "@/pages/SplitPane";
import Meta from "@/pages/Meta";
import MouseTracker from "@/pages/MouseTracker";
import LongTable from "@/pages/LongTable";
import ReactDocument from "@/pages/ReactDocument";
import Drag from "@/pages/Drag";
import JoinInstance from "@/pages/G6Try/JoinInstance";
import HandsontableTry from "@/pages/HandsontableTry";
import HandsontableDemo1 from "@/pages/HandsontableTry/demo1/loadable";
import HandsontableDemo2 from "@/pages/HandsontableTry/demo2/loadable";
import HandsontableDemo3 from "@/pages/HandsontableTry/demo3/loadable";
// import SvgAnimation from '@/pages/SvgAnimation';
import { view as Init } from "@/pages/Init";
import { view as Counter } from "@/pages/Counter";
import PureOrMemoTest from "@/pages/PureOrMemoTest";
import { view as RelationalExpression } from "@/pages/RelationalExpression";
import { view as ExpressionRemake } from "@/pages/ExpressionRemake";
import NotFind from "@/pages/NotFind";
import DynamicTab from "@/pages/DynamicTab";
import ReactTransitionGroup from "@/pages/ReactTransitionGroup";
import { view as TodoList } from "@/pages/TodoList";
import { view as ShortBook } from "@/pages/ShortBook";
import { view as BookKeeping } from "@/pages/BookKeeping";
import SvgAnimal from "@/pages/SvgAnimal";
import ReactDnDStudy from "@/pages/ReactDnDStudy";
import TabsContext from "@/pages/TabsContext";
import IframeMesaage from "@/pages/IframeMesaage";

// const G6Demo = lazy(() => import("@/pages/G6Try/G6Demo/"));

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
		path: "/routingreference",
		component: RoutingReference,
		exact: false,
	},
	{
		path: "/counter",
		component: Counter,
		exact: false,
	},
	{
		path: "/refdemo",
		component: RefDemo,
		exact: false,
	},
	{
		path: "/echartstest",
		component: EchartsTest,
		exact: false,
	},
	{
		path: "/tabledemo",
		component: TableDemo,
		exact: false,
	},
	{
		path: "/motiondemo",
		component: MotionDemo,
		exact: false,
	},
	{
		path: "/reacthookdemo",
		component: ReactHookDemo,
		exact: false,
	},
	{
		path: "/splitpanel",
		component: SplitPanel,
		exact: false,
	},
	{
		path: "/meta",
		component: Meta,
		exact: false,
	},
	{
		path: "/mousetracker",
		component: MouseTracker,
		exact: false,
	},
	{
		path: "/longtable",
		component: LongTable,
		exact: false,
	},
	{
		path: "/reactdocument",
		component: ReactDocument,
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
		path: "/handsontableTry",
		component: HandsontableTry,
		exact: false,
	},
	{
		path: "/handsontable-demo1",
		component: HandsontableDemo1,
		exact: false,
	},
	{
		path: "/handsontable-demo2",
		component: HandsontableDemo2,
		exact: false,
	},
	{
		path: "/handsontable-demo3",
		component: HandsontableDemo3,
		exact: false,
	},
	{
		path: "/pureOrMemoTest",
		component: PureOrMemoTest,
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
		path: "/reactTransitionGroup",
		component: ReactTransitionGroup,
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
		path: "/TabsContext",
		component: TabsContext,
		exact: false,
	},
	{
		path: "/IframeMesaage",
		component: IframeMesaage,
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
