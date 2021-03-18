import { memo, useRef } from "react";
import { LoginWrapper, LoginBox, Input, Button } from "./style";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { login } from "../../../actions";
import { message } from "antd";

const Login = memo(({ login }) => {
	const account = useRef(null);
	const password = useRef(null);

	const toLogin = () => {
		const accountValue = account.current.value;
		const passwordValue = password.current.value;
		if (!accountValue || !passwordValue) {
			message.warning("请将账号密码填写完整");
			return;
		}
		login(accountValue, passwordValue);
	};
	return (
		<LoginWrapper>
			<LoginBox>
				<Input placeholder="账号" ref={account} />
				<Input placeholder="密码" type="password" ref={password} />
				<Button onClick={toLogin}>登录</Button>
			</LoginBox>
		</LoginWrapper>
	);
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			login,
		},
		dispatch,
	);

export default connect(null, mapDispatchToProps)(Login);
