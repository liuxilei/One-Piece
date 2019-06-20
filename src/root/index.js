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
// import SvgAnimation from '../demos/SvgAnimation';
import { view as Init } from '../demos/Init';


import { view as Counter } from '../demos/Counter';

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
            {/* <Route path="/svganimation" component={SvgAnimation} /> */}
            {/* <Route path='/404' component={NotFound} />
            <Redirect from='*' to='/404' />  */}
        </Switch>
    </Router>
);

export default Routes;