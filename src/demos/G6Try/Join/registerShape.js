import G6 from '@antv/g6';
import deleteImg from "./deleteImg.png";

//定义的矩形形状
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
            }
        });
        deleteIcon.on("click", (evt) => {
            console.log("听说你想删除我", evt);
        });
        groupDelete.hide();
        return rect;
    },
    //设置状态
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

//定义的线
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