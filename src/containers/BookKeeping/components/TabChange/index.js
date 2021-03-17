import React, { memo } from "react";
import { Tabs } from "./style";

export default memo((props) => {
	const {
		type,
		leftType,
		rightType,
		onClick,
		leftChildren,
		rightChildren,
	} = props;
	return (
		<Tabs>
			<div
				className={type === leftType ? "select" : ""}
				onClick={() => onClick(leftType)}
			>
				{leftChildren}
			</div>
			<div
				className={type === rightType ? "select" : ""}
				onClick={() => onClick(rightType)}
			>
				{rightChildren}
			</div>
		</Tabs>
	);
});
