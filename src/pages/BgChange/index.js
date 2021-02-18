import React, { memo, useState } from "react";
import { TwitterPicker } from "react-color";
import styles from "./index.less";

export default memo((props) => {
	const [show, setShow] = useState(false);
	return (
		<div className={styles.bgChange} onClick={() => setShow(!show)}>
			背景色改变
			{show && <TwitterPicker triangle="top-right" />}
		</div>
	);
});
