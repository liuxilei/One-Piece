import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default () => (
    <div className="home">
        <h1>demo-lists：</h1>
        <ul>
            <li><Link to="/g6try">G6的尝试练习</Link></li>
            <li><Link to="/init">Init</Link></li>
            <li><Link to="/monacoTest">MonacoTest</Link></li>
            <li><Link to="/routingreference">路由传参</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/refdemo">ref使用例子</Link></li>
            <li><Link to="/echartstest">echarts练习</Link></li>
            <li><Link to="/tabledemo">Table数据长度过长</Link></li>
            <li><Link to="/demo">常规demo测试</Link></li>
            <li><Link to="/motiondemo">动画尝试</Link></li>
            <li><Link to="/automenu">动态菜单</Link></li>
            <li><Link to="/reacthookdemo">React Hook尝试</Link></li>
            
            {/* <li><Link to="/svganimation">SvgAnimation</Link></li> */}
        </ul>
    </div>
)