import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <h1>demo-lists：</h1>
                <ul>
                    <li><Link to="/g6demo">G6Demo</Link></li>
                    <li><Link to="/g6demoone">G6DemoOne</Link></li>
                    <li><Link to="/init">Init</Link></li>
                    <li><Link to="/monacoTest">MonacoTest</Link></li>
                    <li><Link to="/propschange">测试用</Link></li>
                    <li><Link to="/counter">Counter</Link></li>
                    <li><Link to="/g6editordemo">G6EditorDemo</Link></li>
                    {/* <li><Link to="/svganimation">SvgAnimation</Link></li> */}
                </ul>
            </Fragment>
        )
    }
}

export default Home;