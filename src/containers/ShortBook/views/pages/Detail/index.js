import React, { useEffect, memo } from "react";
import { DetailWrapper, Header, Content } from "./style";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getDetailInfo } from "../../../actions";

const Detail = memo((props) => {
	const { getDetailInfo, detailInfo } = props;
	console.log(props);
	useEffect(() => {
		getDetailInfo(props.match.params.id);
	}, [getDetailInfo, props.match.params.id]);

	return (
		<DetailWrapper>
			<Header>{detailInfo.get("title")}</Header>
			<Content
				dangerouslySetInnerHTML={{ __html: detailInfo.get("content") }}
			/>
		</DetailWrapper>
	);
});

const mapStatetToProps = ({ ShortBook }) => ({
	detailInfo: ShortBook.get("detailInfo"),
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			getDetailInfo,
		},
		dispatch,
	);

export default connect(
	mapStatetToProps,
	mapDispatchToProps,
)(withRouter(Detail));
