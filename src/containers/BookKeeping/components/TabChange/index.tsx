import React, { memo } from "react";
import { Tabs } from "./style";

type Props = {
	type: string;
	leftType: string;
	rightType: string;
	onClick: (str: string) => void;
	leftChildren: React.ReactNode;
	rightChildren: React.ReactNode;
};

export default memo((props: Props) => {
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
