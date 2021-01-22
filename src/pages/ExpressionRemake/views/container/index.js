import React, { PureComponent } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DataTree, Editor } from "../components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setSelected, setElements, replaceIndex } from "../../actions";
import utils from "@/utils";
import styles from "./index.less";

@connect(
	({ Express2 }) => ({
		...Express2,
	}),
	(dispatch) =>
		bindActionCreators(
			{
				setSelected,
				setElements,
				replaceIndex,
			},
			dispatch,
		),
)
class ExpressionRemake extends PureComponent {
	handleAddIndex = (element) => {
		const { elements } = this.props;
		const copyElement = utils.objCopy(element);
		const copyElements = utils.objCopy(elements);
		copyElement.id = utils.guid();
		copyElements.push(copyElement);
		this.props.setElements(copyElements);
	};

	render() {
		const { selected, setSelected, elements, replaceIndex } = this.props;
		return (
			<DndProvider backend={HTML5Backend}>
				<div className={styles.ExpressionRemake}>
					<DataTree
						addIndex={this.handleAddIndex}
						replaceIndex={replaceIndex}
					/>
					<Editor
						selected={selected}
						setSelected={setSelected}
						elements={elements}
					/>
				</div>
			</DndProvider>
		);
	}
}

export default ExpressionRemake;
