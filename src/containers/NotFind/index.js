import { Link } from "react-router-dom";
import styles from "./index.less";

export default () => {
	return (
		<div className={styles.notFind}>
			兄弟你迷路了！！！
			<Link to="/">
				<span>返回首页</span>
			</Link>
		</div>
	);
};
