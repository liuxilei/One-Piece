import React, { Fragment } from "react";
import { GlobalStyle } from "./style";
import Header from "./common/header";
import { GlobalIconfontStyle } from "./iconfont/iconfont";
import Home from "./pages/Home";
import Detail from "./pages/Detail/loadable";
import Login from "./pages/Login";
import Write from "./pages/Write";
import { HashRouter, Route } from "react-router-dom";

export default () => {
	return (
		<Fragment>
			<GlobalIconfontStyle />
			<GlobalStyle />
			<Header />
			<HashRouter>
				<Route path="/ShortBook/" exact component={Home}></Route>
				<Route path="/ShortBook/login" exact component={Login}></Route>
				<Route path="/ShortBook/write" exact component={Write}></Route>
				{/* 动态路由传参 */}
				<Route
					path="/ShortBook/detail/:id"
					exact
					component={Detail}
				></Route>
			</HashRouter>
		</Fragment>
	);
};
