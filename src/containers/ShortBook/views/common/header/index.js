import React, { useRef, memo } from "react";
import { CSSTransition } from "react-transition-group";
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button,
	SearchWrapper,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
} from "./style";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
	setNavSearchFocus,
	getList,
	mouseEnter,
	mouseLeave,
	changePage,
	loginOut,
} from "../../../actions";
import { Link } from "react-router-dom";

const Header = memo((props) => {
	const {
		focused,
		setNavSearchFocus,
		getList,
		list,
		page,
		mouseEnter,
		mouseLeave,
		mouseIn,
		totalPage,
		changePage,
		login,
		loginOut,
	} = props;
	const spin = useRef(null);

	const handleChangePage = () => {
		let originAngle = spin.current.style.transform.replace(/[^0-9]/gi, "");
		if (originAngle) {
			originAngle = parseInt(originAngle);
		} else {
			originAngle = 0;
		}
		spin.current.style.transform = `rotate(${originAngle + 360}deg)`;
		if (page === totalPage) {
			changePage(1);
		} else {
			changePage(page + 1);
		}
	};

	const getListArea = (show) => {
		const newList = list.toJS();
		const pageList = [];
		if (newList.length) {
			for (let i = (page - 1) * 10; i < page * 10; i++) {
				pageList.push(
					<SearchInfoItem key={newList[i]}>
						{newList[i]}
					</SearchInfoItem>,
				);
			}
		}

		if (show || mouseIn) {
			return (
				<SearchInfo onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch onClick={handleChangePage}>
							<i ref={spin} className="iconfont spin">
								&#xe851;
							</i>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>{pageList}</SearchInfoList>
				</SearchInfo>
			);
		} else {
			return null;
		}
	};

	const handleFocus = () => {
		setNavSearchFocus(true);
		getList();
	};

	return (
		<HeaderWrapper>
			<Link to="/ShortBook">
				<Logo />
			</Link>
			<Nav>
				<NavItem className="left active">首页</NavItem>
				<NavItem className="left">下载App</NavItem>
				{login ? (
					<NavItem className="right" onClick={loginOut}>
						退出
					</NavItem>
				) : (
					<Link to="/ShortBook/login">
						<NavItem className="right">登录</NavItem>
					</Link>
				)}

				<NavItem className="right">
					<i className="iconfont">&#xe636;</i>
				</NavItem>
				<SearchWrapper>
					<CSSTransition
						in={focused}
						timeout={200}
						classNames="slide"
					>
						<NavSearch
							onFocus={handleFocus}
							onBlur={() => setNavSearchFocus(false)}
							className={focused ? "focused" : ""}
						></NavSearch>
					</CSSTransition>
					<i className={`${focused ? "focused" : ""} iconfont zoom`}>
						&#xe62b;
					</i>
					{getListArea(focused)}
				</SearchWrapper>
			</Nav>
			<Addition>
				<Link to="/ShortBook/write">
					<Button className="writting">
						<i className="iconfont">&#xe6e5;</i>
						写文章
					</Button>
				</Link>
				<Button className="reg">注册</Button>
			</Addition>
		</HeaderWrapper>
	);
});

const mapStateToProps = ({ ShortBook }) => ({
	focused: ShortBook.get("focused"),
	list: ShortBook.get("list"),
	page: ShortBook.get("page"),
	mouseIn: ShortBook.get("mouseIn"),
	totalPage: ShortBook.get("totalPage"),
	login: ShortBook.get("login"),
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			setNavSearchFocus,
			getList,
			mouseEnter,
			mouseLeave,
			changePage,
			loginOut,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
