import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
	dragEnter,
	setDragTarget,
	addFlowEditor,
	changeFlowEditorByKey,
	setReplacedIndex,
	changeFlowEditorByIndex,
	setInsertIndex,
	insertFlowEditor,
	setFlowDragIndex,
	exchangeFlowEditor,
	canvasInsertFlowEditor,
} from "../actions";
import utils from "../../../../utils";
import "./index.scss";

let key = 0;
class Demo extends Component {
	clearData = () => {
		this.props.dragEnter(false);
	};

	dragStart = (item) => {
		this.clearData();
		this.props.setDragTarget(item);
	};

	dragEnd = () => {
		const {
			isDragEnter,
			currentTarget,
			addFlowEditor,
			replacedIndex,
			insertIndex,
		} = this.props;
		let newFlowEditor = utils.objCopy(this.props.currentTarget);
		if (currentTarget && utils.isNumber(insertIndex)) {
			this.props.insertFlowEditor();
		} else if (currentTarget && utils.isNumber(replacedIndex)) {
			this.props.changeFlowEditorByIndex();
		} else if (isDragEnter && currentTarget) {
			addFlowEditor(
				Object.assign(newFlowEditor, {
					edit: false,
					key: ++key,
				}),
			);
		}
	};

	dragOver = (e) => {
		//改变拖动时候的鼠标样式
		e.preventDefault();
	};

	onDoubleClick = (key) => {
		this.props.changeFlowEditorByKey(key);
	};

	//是否拖动进入画板
	dragEnterCanvas = (isEnter) => {
		this.props.dragEnter(isEnter);
	};

	//设置要被替换掉内容
	setReplacedIndex = (replacedIndex) => {
		this.props.setReplacedIndex(replacedIndex);
	};

	//设置插入的索引
	setInsertIndex = (insertIndex) => {
		this.props.setInsertIndex(insertIndex);
	};

	flowDragEnd = () => {
		const { flowDragIndex, replacedIndex, insertIndex } = this.props;
		if (utils.isNumber(flowDragIndex) && utils.isNumber(replacedIndex)) {
			this.props.exchangeFlowEditor();
		} else if (
			utils.isNumber(flowDragIndex) &&
			utils.isNumber(insertIndex)
		) {
			if (flowDragIndex === insertIndex) {
				return;
			}
			this.props.canvasInsertFlowEditor();
		}
	};

	render() {
		const { components, flowEditor } = this.props;
		return (
			<div className="demo-express">
				<div className="title">最终公式:</div>
				<div className="content">
					<div className="operate">
						{components.map((item) => {
							return (
								<div
									key={item.name}
									draggable
									onDragStart={() => this.dragStart(item)}
									onDragEnd={this.dragEnd}
								>
									{item.name}
								</div>
							);
						})}
					</div>
					<div
						className="main"
						onDragOver={(e) => this.dragOver(e)}
						onDragEnter={() => this.dragEnterCanvas(true)}
						onDragLeave={() => this.dragEnterCanvas(false)}
					>
						{flowEditor.map((item, index) => {
							if (item.type === "dimension") {
								return (
									<Fragment key={item.key}>
										<div
											className="black"
											onDragOver={(e) => this.dragOver(e)} //控制鼠标样式
											onDragEnter={() =>
												this.setInsertIndex(index)
											}
											onDragLeave={() =>
												this.setInsertIndex(undefined)
											}
										></div>
										<div
											className={`dimension ${
												item.edit ? "nopadding" : ""
											}`}
											draggable
											onDoubleClick={() =>
												this.onDoubleClick(item.key)
											}
											onDragOver={(e) => this.dragOver(e)} //控制鼠标样式
											onDragEnter={() =>
												this.setReplacedIndex(index)
											}
											onDragLeave={() =>
												this.setReplacedIndex(undefined)
											}
											onDragStart={() =>
												this.props.setFlowDragIndex(
													index,
												)
											}
											onDragEnd={this.flowDragEnd}
										>
											{item.edit ? (
												<input value={item.name} />
											) : (
												item.name
											)}
										</div>
									</Fragment>
								);
							} else {
								return (
									<Fragment key={item.key}>
										<div
											className="black"
											onDragOver={(e) => this.dragOver(e)} //控制鼠标样式
											onDragEnter={() =>
												this.setInsertIndex(index)
											}
											onDragLeave={() =>
												this.setInsertIndex(undefined)
											}
										></div>
										<div
											className={`formula ${
												item.edit ? "nopadding" : ""
											}`}
											draggable
											onDoubleClick={() =>
												this.onDoubleClick(item.key)
											}
											onDragOver={(e) => this.dragOver(e)} //控制鼠标样式
											onDragEnter={() =>
												this.setReplacedIndex(index)
											}
											onDragLeave={() =>
												this.setReplacedIndex(undefined)
											}
											onDragStart={() =>
												this.props.setFlowDragIndex(
													index,
												)
											}
											onDragEnd={this.flowDragEnd}
										>
											{item.edit ? (
												<input value={item.text} />
											) : (
												item.text
											)}
										</div>
									</Fragment>
								);
							}
						})}
					</div>
				</div>
			</div>
		);
	}
}

// const mapStateToProps = (state) => ({
//     components: state.getIn(["Express", "components"]),
//     flowEditor: state.getIn(["Express", "flowEditor"]),
//     currentTarget: state.getIn(["Express", "currentTarget"]),
//     isDragEnter: state.getIn(["Express","isDragEnter"]),
//     replacedIndex: state.getIn(["Express","replacedIndex"]),
//     insertIndex: state.getIn(["Express", "insertIndex"]),
//     flowDragIndex: state.getIn(["Express", "flowDragIndex"])
// });

const mapStateToProps = ({ Express }) => ({
	components: Express.components,
	flowEditor: Express.flowEditor,
	currentTarget: Express.currentTarget,
	isDragEnter: Express.isDragEnter,
	replacedIndex: Express.replacedIndex,
	insertIndex: Express.insertIndex,
	flowDragIndex: Express.flowDragIndex,
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			dragEnter,
			setDragTarget,
			addFlowEditor,
			changeFlowEditorByKey,
			setReplacedIndex,
			changeFlowEditorByIndex,
			setInsertIndex,
			insertFlowEditor,
			setFlowDragIndex,
			exchangeFlowEditor,
			canvasInsertFlowEditor,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
