import React, { Fragment, memo } from "react";
import styles from "./index.less";

//source: 拖动源
//dragstart：刚开始拖动时触发
//drag： 拖动源拖动中持续触发
//dragend： 拖动停止

//target: 放置源
//dragenter： 进入到放置源
//dragover： 在放置源内持续拖动触发
//dragleave或drop： dragleave拖动源进入放置源并离开时触发，drop:拖动结束，并最终进入到放置源内

//更多可参考：https://github.com/liuxilei/notes/issues/27
export default memo(() => {
	const dragStart = (e) => {
		e.dataTransfer.setData(
			"text",
			JSON.stringify({
				message: "设置拖动时传递的数据",
			}),
		);
		console.log("刚开始拖动时触发");
	};

	const drag = (e) => {
		//console.log("拖动源拖动中持续触发");
	};

	const dragEnd = (e) => {
		console.log("拖动停止");
	};

	const dragEnter = (e) => {
		//设置有效的放置源
		e.preventDefault();
		console.log("进入到放置源");
	};

	const dragOver = (e) => {
		//设置有效的放置源
		e.preventDefault();
		//console.log("在放置源内持续拖动触发");
	};

	const dragLeave = (e) => {
		console.log("拖动源进入放置源并离开时触发");
	};

	const drop = (e) => {
		//防止打开默认到url
		e.preventDefault();
		console.log(JSON.parse(e.dataTransfer.getData("Text")));
		console.log("拖动结束，并最终进入到放置源内");
	};

	return (
		<Fragment>
			<div
				draggable
				className={styles.dragStart}
				onDragStart={dragStart}
				onDragEnd={dragEnd}
				onDrag={drag}
			></div>
			<div
				className={styles.dragEnd}
				onDragEnter={dragEnter}
				onDragLeave={dragLeave}
				onDragOver={dragOver}
				onDrop={drop}
			></div>
		</Fragment>
	);
});
