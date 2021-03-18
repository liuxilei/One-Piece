import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Main from "./Main";
import Edit from "./Edit";
import { BookKeepingWrap } from "./style";
import { GlobalBookKeepingIconfontStyle } from "../static/iconfont";

export default () => {
	return (
		<BookKeepingWrap>
			<GlobalBookKeepingIconfontStyle />
			<HashRouter>
				<Route path="/BookKeeping" exact component={Main} />
				<Route path="/BookKeeping/edit" exact component={Edit} />
			</HashRouter>
		</BookKeepingWrap>
	);
};
