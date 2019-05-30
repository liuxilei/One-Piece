
import React from 'react';
import ReactDOM from 'react-dom';
// import G6Demo1 from './g6-demo1';
import reducer from './PropsChange/reducer';
import { createStore } from 'redux';
import PropsChange from './PropsChange';
import { Provider } from 'react-redux';
import { view as Init } from './Init';

const store = createStore(reducer);

ReactDOM.render(
    <Init />,
    document.getElementById('root')
)