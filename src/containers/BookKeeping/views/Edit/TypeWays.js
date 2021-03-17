import React, { memo } from "react";
import { TypeWays, TypeWaysItem } from "./TypeWaysStyles";
import { typeList } from "@/containers/BookKeeping/constants";

export default memo((props) => {
	const { way, wayType, editRecordChange } = props;
	return (
		<TypeWays>
			{typeList[way].map((item) => (
				<TypeWaysItem
					key={item.name}
					onClick={() => editRecordChange("wayType", item.name)}
				>
					<div
						className={`icon ${
							item.name === wayType ? "select" : ""
						}`}
					>
						<i
							className="iconfont"
							dangerouslySetInnerHTML={{
								__html: item.unicode,
							}}
						></i>
					</div>
					<div className="name">{item.name}</div>
				</TypeWaysItem>
			))}
		</TypeWays>
	);
});
