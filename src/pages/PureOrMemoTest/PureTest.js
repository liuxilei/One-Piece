import React, { PureComponent } from "react";

class PureTest extends PureComponent {
	render() {
		console.log("PureComponent渲染");
		return <div>PureComponent组件浅比较测试</div>;
	}
}

export default PureTest;
