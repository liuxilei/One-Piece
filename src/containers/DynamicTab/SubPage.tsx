import { useState } from "react";

type Props = {
	name: string
}

export default ({ name }: Props) => {
	const [num, setNum] = useState(0);
	return (
		<div>
			动态页面{name}{" "}
			<span onClick={() => setNum(num + 1)}>当前数字{num}</span>
		</div>
	);
};
