import React, { Component, createRef } from "react";
import G6 from '@antv/g6';
import left from "./left.png";
import right from "./right.png";
import all from "./all.png";
import inside from "./inside.png";
import deleteImg from "./deleteImg.png";
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
function refreshDragedNodePosition(e) {
    const model = e.item.get('model');
    model.fx = e.x;
    model.fy = e.y;
}


class Join extends Component {
    constructor(props) {
        super(props);
        this.node = createRef();
        this.graph = null;
        this.dragStart = null;//拖动的对象
        this.dragEnd = null; //拖动目标对象
        this.dragSet = [];
        this.data = {
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
            ],
            edges: [
                // {
                //     source: "1",
                //     target: "2",
                //     imgSrc: connectType.left
                // }
            ]
        }
    }

    componentDidMount() {
        //自定义节点
        //this.diyNode();
        //自定义线
        //this.diyEdge();
        //初始化
        this.init();
    }

    init = () => {
        this.graph = new G6.Graph({
            container: this.node.current,
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

        this.graph.data(this.data);
        this.graph.render();

        this.graph.on('edge:click', function (evt) {
            var target = evt.target;

            var type = target.get('type');
            if (type === 'image') {
                // 点击边上的circle
                console.log("连接信息", target);
            }
        });

        this.graph.on('node:click', function (evt) {
            var target = evt.target;
            var node = evt.item;
            var type = target.get('type');
            //当点击删除的图标，选中状态不变
            if (type === 'image') {
                this.graph.setItemState(node, 'selected', true);
            }
        });
        this.graph.on('node:dragstart', e => {
            this.dragStart = e.item.get("model");
            //判断是否已经拖动过
            // if (dragSet.includes(dragStart.id)) {
            //     dragStart = null;
            // }
            console.log("拖动的对象", this.dragStart);
        });

        this.graph.on('node:dragenter', e => {
            this.dragEnd = e.item.get("model");
            // if (dragSet.includes(dragEnd.id)) {
            //     dragEnd = null;
            // }
            console.log("目标对象", this.dragEnd);
        });

        this.graph.on('node:drag', e => {
            refreshDragedNodePosition(e);
        });

        this.graph.on('node:dragend', e => {
            e.item.get('model').fx = null;
            e.item.get('model').fy = null;
            //不存在拖动对象/目标对象，重置定位
            if (!this.dragStart || !this.dragEnd) {
                setTimeout(() => {
                    this.graph.layout();
                }, 500);
            } else {
                this.data.edges.push({
                    source: this.dragEnd.id,
                    target: this.dragStart.id,
                    imgSrc: connectType.left
                });
                this.dragSet = this.dragSet.concat([this.dragEnd.id, this.dragStart.id]);
                this.dragStart = null;
                this.dragEnd = null;
                console.log(this.dragSet);

                this.graph.changeData(this.data);
                this.graph.refresh()
                this.graph.layout();
            }
        });
    }

    refreshDragedNodePosition = (e) => {
        const model = e.item.get('model');
        model.fx = e.x;
        model.fy = e.y;
    }

    diyNode = () => {
        G6.registerNode("node", {
            drawShape: function drawShape(cfg, group) {
                var rect = group.addShape("rect", {
                    attrs: {
                        x: -90,
                        y: -16,
                        width: 180,
                        height: 32,
                        radius: 2,
                        fill: "#fff",
                        stroke: 'rgba(228,230,232,1)',
                        lineWidth: 1,
                        cursor: "pointer",
                    },
                });
                //矩形图片左边框
                group.addShape("rect", {
                    attrs: {
                        x: -90,
                        y: -16,
                        width: 3.5,
                        height: 32,
                        fill: "rgba(56,126,232,1)",
                        radius: 2,
                    }
                });
                var groupDelete = group.addGroup({
                    id: 'groupDelete'
                });
                //删除图形
                var deleteIcon = groupDelete.addShape("image", {
                    attrs: {
                        x: 67,
                        y: -16,
                        width: 24,
                        height: 32,
                        img: deleteImg,
                        cursor: "pointer",
                        id: "imageDelete"
                    }
                });
                deleteIcon.on("click", (evt) => {
                    console.log("听说你想删除我", evt);
                });
                groupDelete.hide();
                return rect;
            },
            // 设置状态
            setState: function setState(name, value, item) {
                var group = item.getContainer();
                var shape = group.get("children")[0]; // 顺序根据 draw 时确定
                var groupDelete = group.findById("groupDelete");
                if (name === "selected") {
                    if (value) {
                        groupDelete.show();
                        shape.attr("fill", "rgb(215,229,250,1)");
                    } else {
                        groupDelete.hide();
                        shape.attr("fill", "#fff");
                    }
                }
            },
            getAnchorPoints: function getAnchorPoints() {
                return [[0, 0.5], [1, 0.5]];
            }
        }, "single-shape");
    }

    diyEdge = () => {
        G6.registerEdge("line-with-arrow", {
            itemType: "edge",
            draw: function draw(cfg, group) {
                var startPoint = cfg.startPoint;
                var endPoint = cfg.endPoint;
                var centerPoint = {
                    x: (startPoint.x + endPoint.x) / 2,
                    y: (startPoint.y + endPoint.y) / 2
                };

                // 为了更好的展示效果, 对称贝塞尔曲线需要连到箭头根部
                var path = group.addShape("path", {
                    attrs: {
                        path: [
                            ['M', startPoint.x, startPoint.y],
                            ['L', endPoint.x / 3 + 2 / 3 * startPoint.x, startPoint.y],
                            ['L', endPoint.x / 3 + 2 / 3 * startPoint.x, endPoint.y],
                            ['L', endPoint.x, endPoint.y]
                        ],
                        stroke: "rgba(0,0,0,.1)",
                        lineWidth: 1,
                        // endArrow: {
                        //     path: "M 4,0 L -4,-4 L -4,4 Z",
                        //     d: 4
                        // }
                    }
                });

                //表关系图形
                var source = cfg.source,
                    target = cfg.target;

                group.addShape("image", {
                    attrs: {
                        id: "connect" + source + "-" + target,
                        r: 6,
                        x: centerPoint.x,
                        y: endPoint.y - 12.5,
                        img: cfg.imgSrc,
                        cursor: "pointer",
                    }
                });
                return path;
            }
        });
    }

    render() {
        return (
            <div ref={this.node}></div>
        )
    }
}

export default Join;