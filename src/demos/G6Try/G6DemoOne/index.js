import React, { Component, createRef } from 'react';
import G6 from '@antv/g6';

const data = {
    nodes: [{
        id: 'testNode1',
        x: 100,
        y: 100,
        size: 20,
        // 定义节点样式为蓝色线条白色填充的圆
        shape: 'circle',
        style: {
            stroke: 'blue',
            fill: '#fff'
        }
    }, {
        id: 'testNode2',
        x: 150,
        y: 150,
        size: [40, 60],
        // 定义节点样式为蓝色线条，10px圆角的矩形
        shape: 'rect',
        style: {
            stroke: 'green',
            fill: '#1890ff',
            radius: 10
        },
        // 定义节点上方有个文本为text，颜色#666的标签
        label: 'text',
        labelCfg: {
            position: 'top',
            style: {
                fill: '#666'
            }
        }
    }]
}
class G6DemoOne extends Component {
    constructor(props) {
        super(props);
        this.node = createRef();
        this.graph = null;
    }

    componentDidMount() {
        this.graph = new G6.Graph({
            container: this.node.current,
            width: 500,
            height: 500,
            modes: { // 支持的 behavior
                default: ['click-select', 'drag-node', 'drag-canvas'],
            },
            pixelRatio: 2,
            // 默认节点配置
            defaultNode: {
                shape: 'rect',
                size: [10, 10]
            },
            nodeStyle: {
                // 节点在默认状态下的样式
                default: {
                    fill: '#40a9ff',
                    stroke: '#096dd9'
                },
                // 当节点在 selected 状态下的样式                         
                selected: {
                    lineWidth: 2,
                    fillOpacity: 0.8
                }
            },
            // 默认边配置
            defaultEdge: {
                shape: 'cubic-horizontal',
                size: 1
            },
            edgeStyle: {
                // 默认边的样式
                default: {
                    stroke: '#A3B1BF'
                }
            }
        });
        this.graph.data(data);
        this.graph.render();
    }

    render() {
        return (
            <div ref={this.node}></div>
        )
    }
}

export default G6DemoOne;