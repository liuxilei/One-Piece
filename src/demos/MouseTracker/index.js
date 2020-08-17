import React, { Component } from "react";
import "./index.scss";
import cat from "./cat.jpg";

class Cat extends Component {
	render() {
		const mouse = this.props.mouse;
		return (
			<img
				src={cat}
				style={{
					position: "absolute",
					left: mouse.x,
					top: mouse.y - 55,
					width: "100px",
					height: "100px",
				}}
			/>
		);
	}
}

class Mouse extends Component {
	constructor(props) {
		super(props);
		this.state = { x: 0, y: 0 };
	}

	handleMouseMove = (event) => {
		this.setState({
			x: event.clientX,
			y: event.clientY,
		});
	};

	render() {
		return (
			<div className="position" onMouseMove={this.handleMouseMove}>
				{/* <p>The current mouse position is ({this.state.x}, {this.state.y})</p> */}
				{this.props.render(this.state)}
			</div>
		);
	}
}

export default () => (
	<div>
		<h1>移动鼠标!</h1>
		<Mouse render={(mouse) => <Cat mouse={mouse} />} />
	</div>
);
