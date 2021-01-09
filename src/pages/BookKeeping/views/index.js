import React from "react";
import { HashRouter, Route } from "react-router-dom";
import BookKeeping from "./page/Home";
import Edit from "./page/Edit";
import { BookKeepingWrap } from "./style";
import { GlobalBookKeepingIconfontStyle } from "./static/iconfont";

export default () => {
	return (
		<BookKeepingWrap>
			<GlobalBookKeepingIconfontStyle />
			<HashRouter>
				<Route path="/BookKeeping" exact component={BookKeeping} />
				<Route path="/BookKeeping/edit" exact component={Edit} />
			</HashRouter>
		</BookKeepingWrap>
	);
};
