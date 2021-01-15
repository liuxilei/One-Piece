import React from "react";
import { Result } from "antd";

export default class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		// 更新 state 使下一次渲染能够显示降级后的 UI
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		console.error(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			// 你可以自定义降级后的 UI 并渲染
			return (
				<Result
					style={{ marginTop: "100px" }}
					title="页面崩溃"
					subTitle="代码程序报错，请查看控制台"
				/>
			);
		}

		return this.props.children;
	}
}
