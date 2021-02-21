import React, { Component, ErrorInfo, ReactNode } from "react";
import { Result } from "antd";

type Props = {
	children: ReactNode
}

type State = {
	hasError: boolean
}


class ErrorBoundary extends Component<Props, State> {
	state: State = {
		hasError: false
	}

	static getDerivedStateFromError(_: Error): State {
		// 更新 state 使下一次渲染能够显示降级后的 UI
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		console.error(error, errorInfo);
	}

	render(): ReactNode {
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

export default ErrorBoundary;
