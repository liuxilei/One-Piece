import React, { useEffect, useState, useRef } from "react";
import ReactDOM from 'react-dom';
import G6 from '@antv/g6';
import left from "./left.png";
import right from "./right.png";
import all from "./all.png";
import inside from "./inside.png";
import "./registerShape";

var connectType = {
    left,
    right,
    inside,
    all
}

// var data = {
//     nodes: [{
//         id: "1",
//         label: "商品",
//     }, {
//         id: "2",
//         label: "商品小类",
//     }, {
//         id: "3",
//         label: "产地",

//     }, {
//         id: "4",
//         label: "供应商"
//     }, {
//         id: "5",
//         label: "商品大类"
//     }, {
//         id: "6",
//         label: "商品大类1"
//     }, {
//         id: "7",
//         label: "商品大类2"
//     }, {
//         id: "8",
//         label: "商品大类3"
//     }, {
//         id: "9",
//         label: "商品大类4"
//     }],
//     edges: [{
//         source: "1",
//         target: "2"
//     }, {
//         source: "1",
//         target: "3"
//     }, {
//         source: "1",
//         target: "4"
//     }, {
//         source: "2",
//         target: "5"
//     }, {
//         source: "4",
//         target: "6"
//     }, {
//         source: "4",
//         target: "7"
//     }, {
//         source: "4",
//         target: "8"
//     }, {
//         source: "3",
//         target: "9"
//     }]
// };



export default () => {
    const ref = useRef(null);
    let graph = null;
    let dragStart = null;//拖动的对象(连接的右边))
    let dragEnd = null; //拖动目标对象(连接的左边)
    let data = {
        nodes: [
            {
                id: "1",
                label: "表一",
                level: 1,
            },
            {
                id: "2",
                label: "表二",
                level: 1,
            },
            {
                id: "3",
                label: "表三",
                level: 1,
            },
            {
                id: "4",
                label: "表四",
                level: 1,
            },
            {
                id: "5",
                label: "表五",
                level: 1,
            },
            {
                id: "6",
                label: "表六",
                level: 1,
            },
            {
                id: "7",
                label: "表七",
                level: 1,
            },
        ],
        edges: [
            // {
            //     source: "1",
            //     target: "2",
            //     imgSrc: connectType.left
            // }
        ]
    }

    const refreshDragedNodePosition = (e) => {
        const model = e.item.get('model');
        model.fx = e.x;
        model.fy = e.y;
    }

    const bindEvents = () => {
        graph.on('edge:click', function (evt) {
            var target = evt.target;

            var type = target.get('type');
            if (type === 'image') {
                // 点击边上的circle
                console.log("连接信息", target);
            }
        });

        graph.on('node:click', (evt) => {
            var target = evt.target;
            var node = evt.item;
            var type = target.get('type');
            //当点击删除的图标，选中状态不变
            if (type === 'image') {
                graph.setItemState(node, 'selected', true);
            }
        });
        graph.on('node:dragstart', e => {
            dragStart = e.item.get("model");
            console.log("拖动的对象", dragStart);
        });

        graph.on('node:dragenter', e => {
            dragEnd = e.item.get("model");
            console.log("目标对象", dragEnd);
        });

        graph.on('node:drag', e => {
            refreshDragedNodePosition(e);
        });

        graph.on('node:dragend', e => {
            e.item.get('model').fx = null;
            e.item.get('model').fy = null;
            //存在拖动对象&&目标对象,否则重置定位
            if (dragStart && dragEnd) {
                //一条线的低等级不能换到高等级去
                //移动已经连接的左边
                data.edges.map((item, index) => {
                    if (item.target === dragStart.id) {
                        data.edges.splice(index, 1);
                    }
                });
                
                data.edges.push({
                    source: dragEnd.id,
                    target: dragStart.id,
                    imgSrc: connectType.left
                });
                dragStart = null;
                dragEnd = null;
                refreshGraph(data);
            } else {
                setTimeout(() => {
                    graph.layout();
                }, 500);
            }
        });
    }

    //刷新布局
    const refreshGraph = (data) => {
        graph.changeData(data);
        graph.refresh()
        graph.layout();
    }



    useEffect(() => {
        if (!graph) {
            graph = new G6.Graph({
                container: ReactDOM.findDOMNode(ref.current),
                width: 1600,
                height: 800,
                layout: {
                    type: 'dagre',
                    rankdir: 'LR',
                    nodeSize: [180, 32],
                    nodesep: 20,
                    ranksep: 30
                },
                modes: {
                    default: [
                        'drag-canvas', //拖拽整个画布
                        'drag-node', //拖拽单个节点
                        'zoom-canvas', //缩放
                        {
                            type: 'click-select', //节点可以选中
                            multiple: false, //取消多选
                        },
                    ]
                },
                defaultNode: {
                    shape: "node",
                    labelCfg: {
                        style: {
                            fill: "#666",
                            fontSize: 12
                        }
                    }
                },
                defaultEdge: {
                    shape: "line-with-arrow",
                    style: {
                        endArrow: false,
                        lineWidth: 1,
                        stroke: "rgba(0,0,0,.1)"
                    }
                }
            });

            graph.data(data);
            graph.render();
            bindEvents();
        }
    }, [])

    return (
        <div ref={ref}></div>
    )
}