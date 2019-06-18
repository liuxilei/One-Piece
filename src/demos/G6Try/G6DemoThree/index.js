import React, { Component, createRef } from 'react';
import G6 from '@antv/g6';

const data = {
    nodes: [{
        id: 'node1',
        x: 100,
        y: 200
    }, {
        id: 'node2',
        x: 300,
        y: 200
    }],
    edges: [{
        target: 'node2',
        source: 'node1'
    }]
};


class G6DemoThree extends Component {
    constructor(props) {
        super(props);
        this.mountNode = createRef();
    }

    componentDidMount() {
        this.graph = new G6.Graph({
            container: 'mountNode',
            width: 500,
            height: 500,
            nodeStyle: {
                default: {
                    fill: '#40a9ff',
                    stroke: '#096dd9'
                }
            },
            edgeStyle: {
                default: { stroke: '#A3B1BF' }
            }
        });
        this.graph.read(data);
    }

    render() {
        return (
            <div 
            //ref={this.mountNode}
            id="mountNode"
            ></div>
        )
    }
}

export default G6DemoThree;