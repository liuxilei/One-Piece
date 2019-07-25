import React, { Component } from 'react';
import SplitPane from '@opuscapita/react-splitpane';
import "./index.less";

class SplitPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleResize = (id, size) => {
        console.log(id, 'changed size to', size);
    }

    render() {
        return (
            <SplitPane id="myVerticalPane">
                <div className="main">
                    <SplitPane id="myHorizontalPane" split="horizontal">
                        <div></div>
                        <div></div>
                    </SplitPane>
                </div>
                
            </SplitPane>
        )
    }
}

export default SplitPanel;