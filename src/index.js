
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import './common/font/iconfont.css';
import { LocaleProvider } from 'antd';
import { Provider } from 'react-redux';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import store from './store';

const App = () => ( 
    <Provider store={store}>
        <LocaleProvider locale={zhCN}>
            <Root />
        </LocaleProvider>
    </Provider>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);