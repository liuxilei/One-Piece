import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../demos/Home';
import G6Demo from '../demos/G6Demo';
import G6DemoOne from '../demos/G6DemoOne';
import MonacoTest from '../demos/MonacoTest';
// import SvgAnimation from '../demos/SvgAnimation';
import { view as Init } from '../demos/Init';
import { view as PropsChange } from '../demos/PropsChange';
import { view as Counter } from '../demos/Counter';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/g6demo" component={G6Demo} />
            <Route path="/g6demoone" component={G6DemoOne} />
            <Route path="/init" component={Init} />
            <Route path="/monacoTest" component={MonacoTest} />
            <Route path="/propschange" component={PropsChange} />
            <Route path="/counter" component={Counter} />
            {/* <Route path="/svganimation" component={SvgAnimation} /> */}
            {/* <Route path='/404' component={NotFound} />
            <Redirect from='*' to='/404' />  */}
        </Switch>
    </Router>
);

export default Routes;