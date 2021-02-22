import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import Root from "./root";
import "@/assert/font/iconfont.css";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import zhCN from "antd/lib/locale-provider/zh_CN";
import ErrorBoundary from "@/components/ErrorBoundary";
import store from "./store";

const App = () => (
	<ErrorBoundary>
		<Provider store={store}>
			<ConfigProvider locale={zhCN}>
				<StrictMode>
					<Root />
				</StrictMode>
			</ConfigProvider>
		</Provider>
	</ErrorBoundary>
);

ReactDOM.render(<App />, document.getElementById("root"));
