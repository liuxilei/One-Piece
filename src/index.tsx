import { StrictMode, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import Root from "./root";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import zhCN from "antd/lib/locale-provider/zh_CN";
import ErrorBoundary from "@/components/ErrorBoundary";
import store from "./store";
import history from "./utils/history";
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Loading from "./components/Loading/index";
import "@/assert/font/iconfont.css";
import "normalize.css";
import "@/assert/global.css";


const Layouts = lazy(() => import('./pages/Layouts/Layouts'));

const App = () => (
    <StrictMode>
        <ErrorBoundary>
            <Provider store={store}>
                <ConfigProvider locale={zhCN}>
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
                                            <Root />
                                            {/* <Layouts /> */}
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

                </ConfigProvider>
            </Provider>
        </ErrorBoundary>
    </StrictMode>
);

if (module && module.hot) {
    module.hot.accept()
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);
