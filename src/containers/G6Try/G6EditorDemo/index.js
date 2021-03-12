import React, { Component, createRef } from "react";
import G6Editor from "@antv/g6-editor";
import styles from "./index.less";

class G6EditorDemo extends Component {
	constructor(props) {
		super(props);
		this.editor = null;
		this.minimap = null;
		this.toolbar = null;
		this.contextmenu = null;
		this.itempannel = null;
		this.detailpannel = null;
		this.page = null;
		//创建DOM
		this.minimap = createRef();
		this.toolbar = createRef();
		this.itempannel = createRef();
		this.detailpannel = createRef();
		this.contextmenu = createRef();
		this.page = createRef();
	}

	componentDidMount() {
		this.editor = new G6Editor();
		this.minimap = new G6Editor.Minimap({
			container: this.minimap.current,
		});
		this.toolbar = new G6Editor.Toolbar({
			container: this.toolbar.current,
		});
		this.contextmenu = new G6Editor.Contextmenu({
			container: this.contextmenu.current,
		});
		this.itempannel = new G6Editor.Itempannel({
			container: this.itempannel.current,
		});
		this.detailpannel = new G6Editor.Detailpannel({
			container: this.detailpannel.current,
		});
		this.page = new G6Editor.Flow({
			graph: {
				container: this.page.current,
			},
		});
		this.editor.add(this.minimap);
		this.editor.add(this.toolbar);
		this.editor.add(this.contextmenu);
		this.editor.add(this.itempannel);
		this.editor.add(this.detailpannel);
		this.editor.add(this.page);
	}

	render() {
		return (
			<div className={styles.main}>
				<div id="minimap" ref={this.minimap}></div>
				<div id="toolbar" ref={this.toolbar}></div>
				<div id="itempannel" ref={this.itempannel}></div>
				<div id="detailpannel" ref={this.detailpannel}></div>
				<div id="contextmenu" ref={this.contextmenu}></div>
				<div id="page" ref={this.page}></div>
			</div>
		);
	}
}

export default G6EditorDemo;
