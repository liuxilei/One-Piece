import { memo } from "react";
import { TopicWrapper, TopicItem } from "../style";

export default memo(({ topicList }) => {
	return (
		<TopicWrapper>
			{topicList.map((item) => {
				return (
					<TopicItem key={item.get("id")}>
						<img className="topic-pic" src={item.get("imgUrl")} />
						{item.get("title")}
					</TopicItem>
				);
			})}
		</TopicWrapper>
	);
});
