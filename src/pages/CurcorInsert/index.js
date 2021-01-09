import React, { Component, Fragment, createRef } from "react";
import { Input } from "antd";
const { TextArea } = Input;

class CurcorInsert extends Component {
	constructor(props) {
		super(props);
		this.textarea = createRef();
		this.state = {
			text: "",
		};
	}

	textChange = (text) => {
		this.setState({ text });
	};

	insertAtCursor(myField, myValue) {
		console.log(myField);
		//IE 浏览器
		if (document.selection) {
			myField.focus();
			sel = document.selection.createRange();
			sel.text = myValue;
			sel.select();
		}

		//FireFox、Chrome等
		else if (myField.selectionStart || myField.selectionStart == "0") {
			var startPos = myField.selectionStart;
			var endPos = myField.selectionEnd;

			// 保存滚动条
			var restoreTop = myField.scrollTop;
			myField.value =
				myField.value.substring(0, startPos) +
				myValue +
				myField.value.substring(endPos, myField.value.length);

			if (restoreTop > 0) {
				myField.scrollTop = restoreTop;
			}

			myField.focus();
			myField.selectionStart = startPos + myValue.length;
			myField.selectionEnd = startPos + myValue.length;
		} else {
			myField.value += myValue;
			myField.focus();
		}
		this.setState({ text: myField.value });
	}

	click = () => {
		console.log(this.textarea.current.resizableTextArea.textArea);
		// return;
		this.insertAtCursor(
			this.textarea.current.resizableTextArea.textArea,
			"test",
		);
	};

	render() {
		return (
			<Fragment>
				<div onClick={this.click} style={{ cursor: "pointer" }}>
					插入文字
				</div>
				<TextArea
					ref={this.textarea}
					value={this.state.text}
					onChange={(e) => this.textChange(e.target.value)}
				/>
			</Fragment>
		);
	}
}

export default CurcorInsert;
