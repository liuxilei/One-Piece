import { memo } from "react";
import { RecommendWrap, RecommendItem } from "../style";

export default memo(({ recommendList }) => {
	return (
		<RecommendWrap>
			{recommendList.map((item) => {
				return (
					<RecommendItem
						imgUrl={item.get("imgUrl")}
						key={item.get("id")}
					></RecommendItem>
				);
			})}
		</RecommendWrap>
	);
});
