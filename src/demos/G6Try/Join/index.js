import React, { useEffect, useState, useRef } from "react";
import ReactDOM from 'react-dom';
import G6 from '@antv/g6';
import left from "./left.png";
import right from "./right.png";
import all from "./all.png";
import inside from "./inside.png";
import "./registerShape";
import List from "./list";

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
    let allList = []; //存放新产生的分组线
    let data = {
        nodes: [
            {
                id: "1",
                label: "表一",
            },
            {
                id: "2",
                label: "表二",
            },
            {
                id: "3",
                label: "表三",
            },
            {
                id: "4",
                label: "表四",
            },
            {
                id: "5",
                label: "表五",
            },
            {
                id: "6",
                label: "表六",
            },
            {
                id: "7",
                label: "表七",
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

    const getString = (target) => {
        return JSON.stringify(target);
    }

    //一条线的低等级不能换到高等级去
    // if (!isNewCreate && !group.canChange(dragEnd.id, dragStart.id)) {
    //     return;
    // }

    //分组逻辑(一条线的低等级不能换到高等级去),产生多个分组线的逻辑
    const allListHandle = (allList, source, target) => {
        const addList = (allList) => {
            let list = new List();
            list.add(source);
            list.add(target);
            allList.push(list);
            console.log(getString(allList));
            return list;
        }
        if (allList.length > 0) {
            //判断已有分组是否有这条线，不然新建分组
            //新连接的左边是否已存在线
            let isSourceHaveLine = false;
            //新连接的右边是否已存在线
            let isTargetHaveLine = false;
            let sourceGroup; //已存在的左边线
            let targetGroup; //已存在的右边线
            let sourceIndex;
            let targetIndex;
            for (let i = 0; i < allList.length; i++) {
                //判定一条线
                if (allList[i].has(source) && allList[i].has(target)) {
                    //低等级不能换到高等级去
                    if (allList[i].getLevel(target) < allList[i].getLevel(source)) {
                        return null;
                    }
                    //相差为1也不能换
                    if (Math.abs(allList[i].getLevel(target) - allList[i].getLevel(source)) === 1) {
                        return null;
                    }
                }
                //判断要连点的左交点是否已存在线
                if (allList[i].getLast() === source) {
                    isSourceHaveLine = true;
                    sourceGroup = allList[i];
                    sourceIndex = i;
                }
                //判断要连点的右交点是否已存在线
                if (allList[i].getFirst() === target) {
                    isTargetHaveLine = true;
                    targetGroup = allList[i];
                    targetIndex = i;
                }
            }
            //如果有这条线,那么就把新的节点续在这条线上
            if (isSourceHaveLine || isTargetHaveLine) {
                //左焦点和右焦点都存在连接线，要把这两条数据合起来
                if (isSourceHaveLine && isTargetHaveLine) {
                    allList.splice(sourceIndex, 1);
                    allList.splice(targetIndex - 1, 1);
                    let newList = new List();
                    let newArr = [...sourceGroup.list, ...targetGroup.list];
                    newArr.map(item => {
                        newList.add(item);
                    });
                    allList.push(newList);
                    console.log("左焦点存在线且右焦点存在线", getString(allList));
                    return newList;
                }
                //左焦点存在线且右焦点不存在线，给左焦点已存在的线续上一个点
                if (isSourceHaveLine && !isTargetHaveLine) {
                    sourceGroup.add(target);
                    console.log("左焦点存在线且右焦点不存在线", getString(allList));
                    return sourceGroup;
                }
                //右焦点存在线且左焦点不存在线，给右焦点已存在的线最前面连上一个点
                if (isTargetHaveLine && !isSourceHaveLine) {
                    targetGroup.addFirst(source);
                    console.log("右焦点存在线且左焦点不存在线", getString(allList));
                    return targetGroup;
                }
            } else {
                return addList(allList);
            }
        } else {
            return addList(allList);
        }
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
            //console.log("拖动的对象", dragStart);
        });

        graph.on('node:dragenter', e => {
            dragEnd = e.item.get("model");
            //console.log("目标对象", dragEnd);
        });

        graph.on('node:drag', e => {
            refreshDragedNodePosition(e);
        });

        graph.on('node:dragend', e => {
            e.item.get('model').fx = null;
            e.item.get('model').fy = null;
            //存在拖动对象&&目标对象,否则重置定位
            if (dragStart && dragEnd) {
                //返回这条连接的线
                let group = allListHandle(allList, dragEnd.id, dragStart.id);
                //如果没有说明不能连
                if (!group) {
                    graph.layout();
                    return;
                }
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