import React, { Component } from 'react';
import * as monaco from 'monaco-editor'
import ReactDOM from 'react-dom';

class Test extends Component {

    componentDidMount() {
        monaco.editor.create(document.getElementById('container'), {
            value: 'console.log("Hello, world")',
            language: 'javascript'
        });
    }

    render() {
        return (
            <div id="container" style={{width: '500px', height: '500px'}}>

            </div>
        )
        
    }
}

ReactDOM.render(
    <Test />,
    document.getElementById('root')
)
