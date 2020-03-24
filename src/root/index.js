import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../demos/Home';
import MonacoTest from '../demos/MonacoTest';
import RefDemo from '../demos/RefDemo';
import G6Demo from '../demos/G6Try/G6Demo';
import G6DemoOne from '../demos/G6Try/G6DemoOne';
import G6EditorDemo from '../demos/G6Try/G6EditorDemo';
import G6Try from '../demos/G6Try';
import G6DemoThree from '../demos/G6Try/G6DemoThree';
import RoutingReference from '../demos/RoutingReference';
import EchartsTest from "../demos/EchartsTest";
import TableDemo from "../demos/TableDemo";
import Demo from "../demos/Demo";
import MotionDemo from "../demos/Motion";
import AutoMenu from "../demos/autoMenu";
import ReactHookDemo from "../demos/ReactHookDemo";
import SplitPanel from "../demos/SplitPane";
import BigTree from "../demos/BigTree";
import Meta from "../demos/Meta";
import MouseTracker from "../demos/MouseTracker";
import LongTable from "../demos/LongTable";
import ReactDocument from "../demos/ReactDocument";
import Drag from "../demos/Drag";
import JoinInstance from "../demos/G6Try/JoinInstance";
import HandsontableTry from "../demos/HandsontableTry";
import HandsontableDemo1 from "../demos/HandsontableTry/demo1";
import HandsontableDemo2 from "../demos/HandsontableTry/demo2";
import HandsontableDemo3 from "../demos/HandsontableTry/demo3";
// import SvgAnimation from '../demos/SvgAnimation';
import { view as Init } from '../demos/Init';
import { view as Counter } from '../demos/Counter';
import PureOrMemoTest from "../demos/PureOrMemoTest";
import { view as RelationalExpression } from "../demos/G6Try/RelationalExpression";
import NotFind from '../demos/NotFind';
import DynamicTab from "../demos/DynamicTab";
import ReactTransitionGroup from "../demos/ReactTransitionGroup";

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/g6try" component={G6Try} /> 
            <Route path="/g6demo" component={G6Demo} />
            <Route path="/g6demoone" component={G6DemoOne} />
            <Route path="/g6demo3" component={G6DemoThree} />
            <Route path="/g6editordemo" component={G6EditorDemo} />
            <Route path="/init" component={Init} />
            <Route path="/monacoTest" component={MonacoTest} />
            <Route path="/routingreference" component={RoutingReference} />
            <Route path="/counter" component={Counter} />
            <Route path="/refdemo" component={RefDemo} />
            <Route path="/echartstest" component={EchartsTest} />
            <Route path="/tabledemo" component={TableDemo} />
            <Route path="/demo" component={Demo} />
            <Route path="/motiondemo" component={MotionDemo} />
            <Route path="/automenu" component={AutoMenu} />
            <Route path="/reacthookdemo" component={ReactHookDemo} />
            <Route path="/splitpanel" component={SplitPanel} />
            <Route path="/bigtree" component={BigTree} />
            <Route path="/meta" component={Meta} />
            <Route path="/mousetracker" component={MouseTracker} />
            <Route path="/longtable" component={LongTable} />
            <Route path="/reactdocument" component={ReactDocument} />
            <Route path="/drag" component={Drag} />
            <Route path="/joininstance" component={JoinInstance} />
            <Route path="/handsontableTry" component={HandsontableTry} />
            <Route path="/handsontable-demo1" component={HandsontableDemo1} />
            <Route path="/handsontable-demo2" component={HandsontableDemo2} />
            <Route path="/handsontable-demo3" component={HandsontableDemo3} />
            <Route path="/pureOrMemoTest" component={PureOrMemoTest} />
            <Route path="/relationalExpression" component={RelationalExpression} />
            <Route path="/dynamictab" component={DynamicTab} />
            <Route path="/reactTransitionGroup" component={ReactTransitionGroup} />
            <Route path='/404' component={NotFind} />
            <Redirect from='*' to='/404' /> 
            {/* <Route path="/svganimation" component={SvgAnimation} /> */}
        </Switch>
    </Router>
);

export default Routes;