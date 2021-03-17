import React, { memo } from "react";
import { BookKeepingRecord, BookKeepingRecordItem } from "./RecordStyles";
import { withRouter } from "react-router-dom";
import { nameToIcon } from "@/containers/BookKeeping/constants";
import { Empty } from "antd";
import utils from "@/utils";

const RecordList = (props) => {
	const {
		accountingRecords,
		setEditRecordItem,
		wayChange,
		deleteRecordItem,
		history,
	} = props;

	const editStart = (item) => {
		setEditRecordItem(item);
		wayChange(item.way);
		history.push("/BookKeeping/Edit");
	};

	return (
		<BookKeepingRecord>
			{utils.isExistent(accountingRecords) ? (
				accountingRecords.map((item) => {
					return (
						<BookKeepingRecordItem key={item.id}>
							<div className="item-icon">
								<i
									className="iconfont"
									dangerouslySetInnerHTML={{
										__html: nameToIcon[item.wayType],
									}}
								></i>
							</div>
							<div className="item-text">{item.title}</div>
							<div className="item-money">
								{`${item.way === "expenditure" ? "-" : ""}${
									item.money
								}元`}
							</div>
							<div className="item-time">{item.time}</div>
							<div className="item-operate">
								<i
									className="iconfont"
									onClick={() => editStart(item)}
								>
									&#xe628;
								</i>
								<i
									className="iconfont"
									onClick={() => deleteRecordItem(item.id)}
								>
									&#xe747;
								</i>
							</div>
						</BookKeepingRecordItem>
					);
				})
			) : (
				<Empty style={{ marginTop: "50px" }} />
			)}
		</BookKeepingRecord>
	);
};

export default withRouter(memo(RecordList));
