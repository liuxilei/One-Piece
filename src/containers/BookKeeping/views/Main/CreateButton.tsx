import { memo } from "react";
import { Link } from "react-router-dom";
import { CreateNewRecord } from "./CreateButtonStyles";

export default memo(() => {
	return (
		<Link to="/BookKeeping/Edit">
			<CreateNewRecord>创建新的记账记录</CreateNewRecord>
		</Link>
	);
});
