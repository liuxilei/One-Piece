import React, { memo } from "react";
import { TypeWays, TypeWaysItem } from "./TypeWaysStyles";
import { typeList } from "@/containers/BookKeeping/constants";
import { Way } from "@/containers/BookKeeping/types";

type Props = {
	way: Way;
	wayType: string;
	editRecordChange: (type: string, value: string) => void;
};

export default memo((props: Props) => {
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
