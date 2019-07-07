import React, { Component, Fragment, createRef } from 'react';
import G6 from '@antv/g6';

class G6Demo extends Component {
    constructor(props) {
        super(props);
        this.node = createRef();
        this.graph = null;
    }

    componentDidMount() {
        console.log('这里检测路由传过来的参数：', this.props.history.location);
        const data = {
            //定义容器中节点
            nodes: [{
                id: '1', //id不能为数字
                x: 300,
                y: 100,
                size: 80,
                shape: 'circle', //节点类型
                label: '流程开始', //节点描述
                color: '#387ee8', //边的颜色
                labelCfg: { //节点描述位置的配置
                    position: 'center',
                    style: {
                        fill: '#fff'
                    }
                },
                style: { //节点样式
                    lineWidth: 0, //边的宽度
                    fill: '#1ec18a',
                }
            }, {
                id: '2',
                x: 300,
                y: 500,
                size: 80,
                shape: 'circle',
                color: '#387ee8',
                label: '流程结束',
                labelCfg: { //节点描述位置的配置
                    position: 'center',
                    style: {
                        fill: '#fff'
                    }
                },
                style: { //节点样式
                    lineWidth: 0,
                    fill: '#f46767'
                }
            },],
            edges: [
                {
                    source: '1',
                    target: '2',
                    shape: 'cubic',
                    label: 'cubic',
                    labelCfg: {
                        position: 'center', // 其实默认就是 center，这里写出来便于理解
                        autoRotate: true, //根据曲线自动适应
                        style: {
                            lineWidth: 5, //线宽
                            fill: '#722ed1', //文字颜色
                            stroke: 'white' // 背景颜色
                        },
                        // refY: 50,
                        // refX: 50
                    },
                    color: '#387ee8' //连线颜色
                    //controlPoints: [{x: 100, y: 70}] //折线需要配置polyline(控制点)，quadratic, cubic一般内置控制点
                }
            ]
        };
        //实例化容器，宽、高
        this.graph = new G6.Graph({
            container: this.node.current,
            width: 1000,
            height: 800,
            modes: { // 支持的 behavior
                default: ['click-select'],
                drag: ['drag-node', 'drag-canvas']
            }
        });
        this.graph.data(data);
        this.graph.render();
        this.graph.on('click', ev => {
            const shape = ev.target;
            const item = ev.item;
            //console.log(ev);
            if (item) {
                const type = item.getType();
                //console.log(type);
            }
        });

        this.graph.on('node:click', ev => {
            //console.log(ev)
            const shape = ev.target;
            const node = ev.item;
            //console.log(shape, node);
        });
    }

    render() {
        return (
            <Fragment>
                <div ref={this.node} ></div>
            </Fragment>
        )
    }
}

export default G6Demo;