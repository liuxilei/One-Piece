import React, { Component } from 'react';
import G6 from '@antv/g6@3.0.0-beta.8';
const Util = G6.Util;

class G6Demo1 extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // 数据定义
        const data = {
            nodes: [{
                id: 'node1',
                x: 100,
                y: 200,
                shape: 'circle',
                style: {
                    fill: 'red'
                }
                //img: 'https://gw.alipayobjects.com/os/s/prod/antv/assets/image/logo-with-text-73b8a.svg'
            }, {
                id: 'node2',
                x: 300,
                y: 200,
                label: '萧庆',
                labelCfg: {
                    position: 'bottom'
                },
                shape: 'image',
                img: 'https://img2.bosszhipin.com/boss/avatar/avatar_13.png'
            }, {
                id: 'node3',
                x: 400,
                y: 100,
                shape: 'image',
                label: '语雀',
                labelCfg: {
                    position: 'bottom'
                },
                img: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg'
            }, {
                id: 'node4',
                x: 400,
                y: 400,
                shape: 'image',
                img: '//img.alicdn.com/tfs/TB1_uT8a5ERMeJjSspiXXbZLFXa-143-59.png'
            }],
            edges: [{
                id: 'edge1',
                target: 'node2',
                source: 'node1',
                style: {
                    endArrow: true
                },
                label: '你好,我好',
                labelCfg: {
                    style: { stroke: 'white', lineWidth: 5 } // 加白边框
                }
            }, {
                source: 'node2',
                target: 'node3',
                style: {
                    endArrow: true
                },
                shape: 'quadratic',
                label: '过去的线',
                labelCfg: {
                    refY: -10,
                    refX: 0,
                    autoRotate: true,
                    style: {
                        fill: 'red'
                    }
                }
            },
            {
                source: 'node3',
                target: 'node2',
                style: {
                    endArrow: true,
                    stroke: 'red'
                },
                size: 2,
                shape: 'quadratic',
                label: '回来的线',
                labelCfg: {
                    refY: -10,
                    refX: 0,
                    autoRotate: true,
                    style: {
                        fill: 'red'
                    }
                }
            }, {
                source: 'node3',
                target: 'node4',
                style: {
                    endArrow: true,
                    stroke: 'blue',
                    lineDash: [2, 2]
                },
                shape: 'my-edge',
                label: '随便连连\n换行',
                curveLevel: 4,
                labelCfg: {
                    refY: -20,
                    refX: 0,
                    autoRotate: true,
                    style: {
                        fill: 'red'
                    }
                }
            }]
        };
        // 为了定制曲线的曲度，所以需要复写默认的边，额外增加 level 字段，进行设置曲度
        G6.registerEdge('my-edge', {
            // 复写控制点的逻辑
            getControlPoints(cfg) {
                const controlPoints = []; // 指定controlPoints
                const level = cfg.curveLevel || 1; // 从 -10， 10
                const offset = level * -20; // 根据不同的level 计算不同的偏移
                const { startPoint, endPoint } = cfg;
                const innerPoint = Util.getControlPoint(startPoint, endPoint, 0.5, offset);
                controlPoints.push(innerPoint);
                return controlPoints;
            },
        }, 'quadratic');

        // 图画布的定义
        const graph = new G6.Graph({
            container: 'mountNode',
            width: 500,
            height: 500,
            modes: { // 支持的 behavior
                default: ['drag-node', 'click-select', 'drag-canvas']
            }
        });

        // 将 read 方法分解成 data() 和 render 方法，便于整个生命周期的管理
        graph.data(data);
        graph.render();

        // 监听事件，变化不大
        graph.on('node:click', ev => {
            var shape = ev.target;
            var node = ev.item;
            console.log(ev);
        });
        graph.on('node:mouseenter', ev => {
            //var node = ev.item;
        });
    }

    render() {
        return (
            <div id="mountNode"></div>
        )
    }
}

export default G6Demo1;