import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import G6 from "@antv/g6";
import left from "./left.png";
import right from "./right.png";
import all from "./all.png";
import inside from "./inside.png";
import List from "./list";
import "./registerShape";

var connectType = {
	left,
	right,
	inside,
	all,
};

const objCopy = (obj) => {
	return JSON.parse(JSON.stringify(obj));
};

let graph = null;
let dragStart = null; //拖动的对象(连接的右边))
let dragEnd = null; //拖动目标对象(连接的左边)
let allList = []; //存放新产生的分组线
/**
 * @param {object} data 节点数据
 * @param {func} setData 设置节点数据
 * @param {object} history 路由
 * @param {string} width 布局宽度
 * @param {string} height 布局高度
 */
export default ({ data, setData, history, width, height }) => {
	const ref = useRef(null);
	// data = {
	//     nodes: [
	//         {
	//             id: "1",
	//             label: "表一",
	//         },
	//         {
	//             id: "2",
	//             label: "表二",
	//         },
	//         {
	//             id: "3",
	//             label: "表三",
	//         },
	//         {
	//             id: "4",
	//             label: "表四",
	//         },
	//         {
	//             id: "5",
	//             label: "表五",
	//         },
	//         {
	//             id: "6",
	//             label: "表六",
	//         },
	//         {
	//             id: "7",
	//             label: "表七",
	//         },
	//     ],
	//     edges: [
	//         // {
	//         //     source: "1",
	//         //     target: "2",
	//         //     imgSrc: connectType.left
	//         // }
	//     ]
	// }

	const refreshDragedNodePosition = (e) => {
		const model = e.item.get("model");
		model.fx = e.x;
		model.fy = e.y;
	};

	const getString = (target) => {
		return JSON.stringify(target);
	};

	//一条线的低等级不能换到高等级去
	// if (!isNewCreate && !group.canChange(dragEnd.id, dragStart.id)) {
	//     return;
	// }

	//分组逻辑(一条线的低等级不能换到高等级去),产生多个分组线的逻辑
	const allListHandle = (allList, source, target) => {
		//分组线内存在一个元素的分组干掉它
		const onlyOneDelete = (allList) => {
			if (allList && allList.length > 0) {
				for (let i = allList.length - 1; i >= 0; i--) {
					if (allList[i].getMax() === 1) {
						console.log(
							"删除分组线只有一个的元素，该分组为：",
							allList[i],
						);
						allList.splice(i, 1);
					}
				}
			}
		};
		//如果分组线中有分组线被另外一个分组线包含的话，那么删除，因为重复了
		const startsWithedDelete = (allList) => {
			let index;
			let newAllList = [];
			allList.map((item) => {
				newAllList.push(item.list.join(","));
			});
			newAllList.map((item, i) => {
				newAllList.map((k) => {
					if (item !== k && k.startsWith(item)) {
						index = i;
					}
				});
			});
			allList.splice(index, 1);
		};
		//拥有右焦点的线,在移动时，要把拥有这个点的线的右边都截取掉
		const spliceTargetRight = (allList) => {
			let targetList = [];
			let sliceResults = [];
			allList.map((item) => {
				if (item.has(target)) {
					targetList.push(item);
				}
			});
			targetList.map((item) => {
				sliceResults.push(item.slice(target));
			});
			return sliceResults;
		};
		//拥有左焦点的线,在移动时，要把拥有这个点的线的左边都截取掉
		const spliceTargetLeft = (allList) => {
			let targetLine; //我觉得左边只有一条线
			let sliceLine = "";
			allList.map((item) => {
				if (item.has(source)) {
					targetLine = item;
				}
			});
			if (targetLine) {
				sliceLine = targetLine.sliceLeft(source);
			}
			return sliceLine;
		};
		const addList = (allList) => {
			if (target === source) {
				return false;
			}
			let sliceResults = spliceTargetRight(allList);
			let sliceLine = spliceTargetLeft(allList);
			if (sliceResults && sliceResults.length > 0) {
				sliceResults.map((item) => {
					allList.push(new List([source, ...item]));
				});
			} else if (sliceLine) {
				allList.push(new List([...sliceLine, target]));
			} else {
				allList.push(new List([source, target]));
			}
			onlyOneDelete(allList);
			console.log(getString(allList));
			return true;
		};
		if (allList.length > 0) {
			//判断已有分组是否有这条线，不然新建分组
			//新连接的左边是否已存在线
			let isSourceHaveLine = false;
			//新连接的右边是否已存在线
			let isTargetHaveLine = false;
			let sourceGroup; //已存在的左边线
			let targetGroup; //已存在的右边线
			let sourceIndex; //左边线存在位置
			let targetIndex; //右边线存在位置
			for (let i = 0; i < allList.length; i++) {
				//判定一条线
				if (allList[i].has(source) && allList[i].has(target)) {
					//低等级不能换到高等级去
					if (
						allList[i].getLevel(target) <
						allList[i].getLevel(source)
					) {
						return false;
					}
					//相差为1也不能换
					if (
						Math.abs(
							allList[i].getLevel(target) -
								allList[i].getLevel(source),
						) === 1
					) {
						return false;
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
					newArr.map((item) => {
						newList.add(item);
					});
					allList.push(newList);
					console.log(
						"左焦点存在线且右焦点存在线",
						getString(allList),
					);
					return true;
				}
				//左焦点存在线且右焦点不存在线，给左焦点已存在的线续上一个点
				if (isSourceHaveLine && !isTargetHaveLine) {
					let sliceResults = spliceTargetRight(allList);
					//右焦点不存在线，但是右焦点处于某些线上，那么就要把线上右焦点右侧的数据切下来
					if (sliceResults && sliceResults.length > 0) {
						//删除左焦点那条线
						allList.splice(sourceIndex, 1);
						sliceResults.map((item) => {
							allList.push(
								new List([...sourceGroup.list, ...item]),
							);
						});
					} else {
						sourceGroup.add(target);
					}
					onlyOneDelete(allList);
					console.log(
						"左焦点存在线且右焦点不存在线",
						getString(allList),
					);
					return true;
				}
				//右焦点存在线且左焦点不存在线，给右焦点已存在的线最前面连上一个点
				if (isTargetHaveLine && !isSourceHaveLine) {
					let sliceLine = spliceTargetLeft(allList);
					if (sliceLine) {
						allList.splice(targetIndex, 1);
						allList.push(
							new List([...sliceLine, ...targetGroup.list]),
						);
					} else {
						targetGroup.addFirst(source);
					}
					// startsWithedDelete(allList);
					console.log(
						"右焦点存在线且左焦点不存在线",
						getString(allList),
					);
					return true;
				}
			} else {
				return addList(allList);
			}
		} else {
			return addList(allList);
		}
	};

	const bindEvents = () => {
		graph.on("edge:click", function (evt) {
			var target = evt.target;

			var type = target.get("type");
			if (type === "image") {
				// 点击边上的circle
				console.log("连接信息", target);
			}
		});

		graph.on("node:click", (evt) => {
			var target = evt.target;
			var node = evt.item;
			var type = target.get("type");
			//当点击删除的图标，选中状态不变
			if (type === "image") {
				graph.setItemState(node, "selected", true);
			}
		});
		graph.on("node:dragstart", (e) => {
			dragStart = e.item.get("model");
			console.log("拖动的对象", dragStart);
		});

		graph.on("node:dragenter", (e) => {
			dragEnd = e.item.get("model");
			console.log("目标对象", dragEnd);
		});

		graph.on("node:drag", (e) => {
			refreshDragedNodePosition(e);
		});

		graph.on("node:dragend", (e) => {
			e.item.get("model").fx = null;
			e.item.get("model").fy = null;
			//存在拖动对象&&目标对象,否则重置定位
			if (dragStart && dragEnd) {
				let handleOk = allListHandle(allList, dragEnd.id, dragStart.id);
				if (!handleOk) {
					graph.layout();
					return;
				}
				let data = graph.save();
				//移动已经连接的左边
				data.edges.map((item, index) => {
					if (item.target === dragStart.id) {
						data.edges.splice(index, 1);
					}
				});

				data.edges.push({
					source: dragEnd.id,
					target: dragStart.id,
					imgSrc: connectType.left,
				});

				dragStart = null;
				dragEnd = null;
				setData(data);
				refreshGraph(data);
			} else {
				setTimeout(() => {
					graph.layout();
				}, 500);
			}
		});
	};

	//刷新布局
	const refreshGraph = (data) => {
		graph.changeData(data);
		graph.refresh();
		graph.layout();
	};

	useEffect(() => {
		if (!graph) {
			graph = new G6.Graph({
				container: ReactDOM.findDOMNode(ref.current),
				width: width,
				height: height,
				layout: {
					type: "dagre",
					rankdir: "LR",
					nodeSize: [180, 32],
					nodesep: 20,
					ranksep: 30,
				},
				modes: {
					default: [
						"drag-canvas", //拖拽整个画布
						"drag-node", //拖拽单个节点
						"zoom-canvas", //缩放
						{
							type: "click-select", //节点可以选中
							multiple: false, //取消多选
						},
					],
				},
				defaultNode: {
					shape: "node",
					labelCfg: {
						style: {
							fill: "#666",
							fontSize: 12,
						},
					},
				},
				defaultEdge: {
					shape: "line-with-arrow",
					style: {
						endArrow: false,
						lineWidth: 1,
						stroke: "rgba(0,0,0,.1)",
					},
				},
			});
			graph.read(data);
			bindEvents();
		} else {
			refreshGraph(data);
		}
		return componentWillUnmount;
	});

	const componentWillUnmount = () => {
		const nextRoutePathName = history.location.pathname;
		// 判断路由是哪个地址，如果不是当前的路由地址说明是销毁了，那就执行事件，如果是那就不执行
		if (
			!String.prototype.startsWith.call(
				nextRoutePathName,
				"/joininstance",
			)
		) {
			graph = null;
			dragStart = null;
			dragEnd = null;
			allList = [];
		}
	};

	return <div ref={ref}></div>;
};
