import React, { StrictMode, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import Root from "./root";
import "@/assert/font/iconfont.css";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import zhCN from "antd/lib/locale-provider/zh_CN";
import ErrorBoundary from "@/components/ErrorBoundary";
import store from "./store";
import history from "./utils/history";
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Loading from "./components/Loading/index";

import "./global.css";

const Layouts = lazy(() => import('./pages/Layouts/Layouts'));

const App = () => (
	<ErrorBoundary>
		<Provider store={store}>
			<ConfigProvider locale={zhCN}>
				<StrictMode>
					<Router history={history}>
						<Switch>
							<Route path="/login">
								<Login />
							</Route>
							<Route
								path="/"
								render={({ location }) =>
									window.localStorage.getItem('token') ? (
										<Suspense fallback={Loading}>
											<Layouts />
										</Suspense>
										
									) : (
											<Redirect
												to={{
													pathname: '/login',
													state: { from: location },
												}}
											/>
										)
								}
							/>
						</Switch>
					</Router>
				</StrictMode>
			</ConfigProvider>
		</Provider>
	</ErrorBoundary>
);

ReactDOM.render(<App />, document.getElementById("root"));
