import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class Demo extends Component {
    render() {
        return (
            <div>Hello world</div>
        )
    }
};

ReactDOM.render(
    <Demo />,
    document.getElementById('root')
)