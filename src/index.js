import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './common/font/iconfont.css';

class Demo extends Component {
    render() {
        return (
            <div>
                <i className="iconfont iconiconfonticon-yonghu"></i>
            </div>
        )
    }
}

ReactDOM.render(
    <Demo />,
    document.getElementById('root')
);
