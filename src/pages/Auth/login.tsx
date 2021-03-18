import { FC, useState } from "react";
import styles from "./Login.less";
import history from "@/utils/history";
import { message } from "antd";
import { login } from "@/utils";

const Login: FC = () => {
    const [userName, setUserName] = useState("admin");
    const [passWord, setPassWord] = useState("admin");

    const handlLogin = () => {
        if (userName === "admin" && passWord === "admin") {
            login();
            message.success("登录成功");
            history.replace("/Main");
        } else {
            message.error("账号密码错误");
        }
    }

    return (
        <div className={styles.Login}>
            <h1>银的私人空间</h1>
            <div className={styles.loginWrap}>
                <div className={styles.loginBg}></div>
                <div className={styles.form}>
                    <h3>登录</h3>
                    <div className="input-wrap">
                        <span className="iconfont iconren"></span>
                        <input
                            placeholder="请输入用户名"
                            value={userName}
                            onChange={e => setUserName(e.target.value as any)}
                        />
                    </div>
                    <div className="input-wrap">
                        <span className="iconfont iconsuo"></span>
                        <input
                            placeholder="请输入密码"
                            type="password"
                            value={passWord}
                            onChange={e => setPassWord(e.target.value as any)}
                        />
                    </div>
                    <div className="login-btn" onClick={handlLogin}>立即登录</div>
                </div>
            </div>
        </div>
    );
};

export default Login;
