import React, { Component, Fragment } from "react";
import styles from "./index.less";

class Drag extends Component {
	state = {
		dragStart: null,
		dragEnd: null,
	};
	dragStart = (e) => {
		this.setState({
			dragStart: e.target,
		});
		//console.log("拖动前", e.target);
	};

	dragEnd = (e) => {
		//console.log("拖动后", e.target);
	};

	dragEnter = (e) => {
		e.preventDefault();
		console.log(this.state.dragStart);
		this.setState({
			dragEnd: e.target,
		});
		//console.log("有人把东西拖动进入我这里了，但拖动还不一定结束，也可能继续拖动出我这里", e.target)
	};

	dragLeave = (e) => {
		//console.log("有人把东西拖动我这里又拖出去了");
	};

	dragOver = (e) => {
		//console.log("被拖动的元素还在放置目标的范围内移动时", e.target)
	};

	drag = (e) => {
		//console.log("如果元素被放到放置目标中触发")
	};

	render() {
		return (
			<Fragment>
				<div
					className={styles.dragStart}
					draggable
					onDragStart={this.dragStart}
					onDragEnd={this.dragEnd}
				></div>
				<div
					draggable
					onDragStart={this.dragStart}
					onDragEnter={this.dragEnter}
					onDragLeave={this.dragLeave}
					onDragOver={this.dragOver}
					onDrag={this.drag}
					className={styles.dragEnd}
				></div>
			</Fragment>
		);
	}
}

export default Drag;
