import React, { Component } from 'react';

class MonacoTest extends Component {

    componentDidMount() {
        import('monaco-editor').then(monaco => {
            monaco.editor.create(document.getElementById('container'), {
                value: 'console.log("Hello, world")',
                language: 'javascript'
            });
        })
        
    }

    render() {
        return (
            <div id="container" style={{width: '500px', height: '500px'}}>

            </div>
        )
    }
}

export default MonacoTest;