import React, { Component, Fragment, createRef } from "react";

class G6test extends Component {
	constructor(props) {
		super(props);
		this.state = {};

		//16.3版本引入的React.createRef()
		this.test2dom = createRef();
	}

	componentDidMount() {
		//回调选中dom方式
		console.log(this.testdom);
		//新的选中的dom方式
		console.log(this.test2dom.current);
	}

	render() {
		return (
			<Fragment>
				<div ref={(node) => (this.testdom = node)}>7868</div>
				<div ref={this.test2dom}>11</div>
			</Fragment>
		);
	}
}

export default G6test;
