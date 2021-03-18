import { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./index.less";

export default () => (
	<div className={styles.g6test}>
		<h1>G6-demos：</h1>
		<ul>
			<li>
				<Link to="/joininstance">join组件实例</Link>
			</li>
			<li>
				<Link to="/g6demo">demo1</Link>
			</li>
			<li>
				<Link to="/g6demoone">demo2</Link>
			</li>
			<li>
				<Link to="/g6editordemo">demo3</Link>
			</li>
			<li>
				<Link to="/g6demo3">demo4</Link>
			</li>
		</ul>
	</div>
);
