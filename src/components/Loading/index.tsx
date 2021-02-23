import React, { PureComponent } from "react";
import { Spin } from "antd";
import styles from "./index.less";

// loading components from code split
// https://umijs.org/plugin/umi-plugin-react.html#dynamicimport
export default () => (
	<div className={styles.loading} >
		<Spin size="large" />
	</div>
)
