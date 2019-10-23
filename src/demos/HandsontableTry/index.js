import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <Fragment>
        <h1>Handsontable-demos：</h1>
        <ul>
            <li><Link to="/handsontable-demo1">handsontable-demo1</Link></li>
            <li><Link to="/handsontable-demo2">handsontable-demo2</Link></li>
            <li><Link to="/handsontable-demo3">handsontable-demo3</Link></li>
            {/* <li><Link to="/handsontable-demo4">demo3</Link></li>
            <li><Link to="/handsontable-demo5">demo4</Link></li>
            <li><Link to="/handsontable-demo6">表关联组件调用</Link></li> */}
        </ul>
    </Fragment>
);