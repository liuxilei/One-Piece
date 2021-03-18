import { PureComponent } from "react";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import { Topic, List, Recommend, Writer } from "./components";
import { getHomeInfo, getMoreList, changeShowScroll } from "../../../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Home extends PureComponent {
	componentDidMount() {
		this.props.getHomeInfo();
		this.bindEvent();
	}

	componentWillUnmount() {
		window.onscroll = null;
	}

	bindEvent = () => {
		window.onscroll = () => {
			let scrollTop = document.documentElement.scrollTop;
			this.props.changeShowScroll(scrollTop > 400);
		};
	};

	handleScrollTop = () => {
		window.scrollTo(0, 0);
	};

	render() {
		const {
			topicList,
			articleList,
			recommendList,
			getMoreList,
			articlePage,
			showScroll,
		} = this.props;
		return (
			<HomeWrapper>
				<HomeLeft>
					<img
						className="banner-img"
						alt=""
						src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
					/>
					<Topic topicList={topicList} />
					<List
						articleList={articleList}
						getMoreList={getMoreList}
						articlePage={articlePage}
					/>
				</HomeLeft>
				<HomeRight>
					<Recommend recommendList={recommendList} />
					<Writer />
				</HomeRight>
				{showScroll && (
					<BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
				)}
			</HomeWrapper>
		);
	}
}

const mapStateToProps = ({ ShortBook }) => ({
	topicList: ShortBook.get("topicList"),
	articleList: ShortBook.get("articleList"),
	recommendList: ShortBook.get("recommendList"),
	articlePage: ShortBook.get("articlePage"),
	showScroll: ShortBook.get("showScroll"),
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			getHomeInfo,
			getMoreList,
			changeShowScroll,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
