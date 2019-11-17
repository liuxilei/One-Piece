import React, { Component } from 'react';
import monaco from "monaco-editor";

class MonacoTest extends Component {

    componentDidMount() {
        monaco.editor.create(document.getElementById('container'), {
            value: 'console.log("Hello, world")',
            language: 'javascript',
            readOnly: true,
        });

    }

    render() {
        return (
            <div id="container" style={{ width: '500px', height: '500px' }}>

            </div>
        )
    }
}

export default MonacoTest;