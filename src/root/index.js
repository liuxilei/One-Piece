import React from "react";
import {
	HashRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Home from "../demos/Home";
import RefDemo from "../demos/RefDemo";
import G6Demo from "../demos/G6Try/G6Demo/loadable";
import G6DemoOne from "../demos/G6Try/G6DemoOne/loadable";
import G6EditorDemo from "../demos/G6Try/G6EditorDemo/loadable";
import G6Try from "../demos/G6Try";
import G6DemoThree from "../demos/G6Try/G6DemoThree/loadable";
import RoutingReference from "../demos/RoutingReference";
import EchartsTest from "../demos/EchartsTest";
import TableDemo from "../demos/TableDemo";
import Demo from "../demos/Demo";
import MotionDemo from "../demos/Motion";
import AutoMenu from "../demos/autoMenu";
import ReactHookDemo from "../demos/ReactHookDemo";
import SplitPanel from "../demos/SplitPane";
import Meta from "../demos/Meta";
import MouseTracker from "../demos/MouseTracker";
import LongTable from "../demos/LongTable";
import ReactDocument from "../demos/ReactDocument";
import Drag from "../demos/Drag";
import JoinInstance from "../demos/G6Try/JoinInstance";
import HandsontableTry from "../demos/HandsontableTry";
import HandsontableDemo1 from "../demos/HandsontableTry/demo1/loadable";
import HandsontableDemo2 from "../demos/HandsontableTry/demo2/loadable";
import HandsontableDemo3 from "../demos/HandsontableTry/demo3/loadable";
// import SvgAnimation from '../demos/SvgAnimation';
import { view as Init } from "../demos/Init";
import { view as Counter } from "../demos/Counter";
import PureOrMemoTest from "../demos/PureOrMemoTest";
import { view as RelationalExpression } from "../demos/G6Try/RelationalExpression";
import NotFind from "../demos/NotFind";
import DynamicTab from "../demos/DynamicTab";
import ReactTransitionGroup from "../demos/ReactTransitionGroup";
import { view as TodoList } from "../demos/TodoList";
import { view as ShortBook } from "../demos/ShortBook";
import { view as BookKeeping } from "../demos/BookKeeping";
import SvgAnimal from "../demos/SvgAnimal";
import ReactDnDStudy from "../demos/ReactDnDStudy";
import TabsContext from "../demos/TabsContext";
import CurcorInsert from "../demos/CurcorInsert";

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
		path: "/demo",
		component: Demo,
		exact: false,
	},
	{
		path: "/motiondemo",
		component: MotionDemo,
		exact: false,
	},
	{
		path: "/automenu",
		component: AutoMenu,
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
		path: "/CurcorInsert",
		component: CurcorInsert,
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
