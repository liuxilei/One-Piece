import { Component, createRef } from "react";
import G6 from "@antv/g6";
const Util = G6.Util;

const data = {
	nodes: [
		{
			id: "node1",
			x: 200,
			y: 200,
			shape: "circle",
			size: 20,
			label: "1号圆",
			labelCfg: {
				position: "top",
			},
		},
		{
			id: "node2",
			x: 500,
			y: 200,
			shape: "circle",
			size: 50,
			label: "2号圆",
			labelCfg: {
				position: "top",
			},
		},
	],
	edges: [
		{
			id: "edge1",
			target: "node2",
			source: "node1",
			shape: "custom-edge",
		},
	],
};

class G6DemoOne extends Component {
	constructor(props) {
		super(props);
		this.node = createRef();
		this.graph = null;
	}

	componentDidMount() {
		this.graph = new G6.Graph({
			container: this.node.current,
			width: 1000,
			height: 500,
			modes: {
				// 支持的 behavior
				default: [
					"drag-canvas",
					{
						type: "tooltip",
						formatText(model) {
							console.log(model);
							return model.id + ":" + model.label;
						},
					},
				],
				drag: ["drag-node", "drag-canvas"],
				diy: [
					"click-select",
					"drag-node",
					"drag-canvas",
					"zoom-canvas",
				],
				edit: ["drag-node", "tooltip"],
				test: ["activate-node"],
			},
		});
		this.graph.setMode("test");
		this.graph.addBehaviors(
			{
				type: "drag-canvas",
				direction: "x",
			},
			"edit",
		);
		this.graph.data(data);
		this.graph.render();
		G6.registerBehavior("activate-node", {
			getDefaultCfg() {
				return {
					multiple: true,
				};
			},
			getEvents() {
				return {
					"node:click": "onNodeClick",
					"canvas:click": "onCanvasClick",
				};
			},
			onNodeClick(e) {
				const graph = this.graph;
				const item = e.item;
				if (item.hasState("active")) {
					graph.setItemState(item, "active", false);
					return;
				}
				// this 上即可取到配置，如果不允许多个active，先取消其他节点的active状态
				if (!this.multiple) {
					this.removeNodesState();
				}
				// 置点击的节点状态为active
				graph.setItemState(item, "active", true);
			},
			onCanvasClick(e) {
				// shouldUpdate可以由用户复写，返回 true 时取消所有节点的active状态
				if (this.shouldUpdate(e)) {
					removeNodesState();
				}
			},
			removeNodesState() {
				graph.findAllByState("active").forEach((node) => {
					graph.setItemState(node, "active", false);
				});
			},
		});
	}

	render() {
		return <div ref={this.node}></div>;
	}
}

export default G6DemoOne;
