import React, { memo } from "react";
import { DatePicker } from "antd";
import moment from "moment";
import { FormLayout } from "./FormStyles";
import { dateFormat } from "@/containers/BookKeeping/constants";

export default memo((props) => {
	const { editRecordChange, title, money, time } = props;
	return (
		<>
			<FormLayout>
				<div className="attribute">标题*：</div>
				<div className="input">
					<input
						placeholder="请输入标题"
						className="normal"
						value={title}
						onChange={(e) =>
							editRecordChange("title", e.target.value)
						}
					/>
				</div>
			</FormLayout>
			<FormLayout>
				<div className="attribute">金额*：</div>
				<div className="input">
					<input
						placeholder="请输入金额"
						value={money}
						className="normal"
						onChange={(e) =>
							editRecordChange("money", e.target.value)
						}
					/>
				</div>
			</FormLayout>
			<FormLayout>
				<div className="attribute">日期*：</div>
				<div className="input">
					<DatePicker
						value={time ? moment(time, dateFormat) : null}
						format={dateFormat}
						className="date"
						onChange={(date, dateString) =>
							editRecordChange("time", dateString)
						}
					/>
				</div>
			</FormLayout>
		</>
	);
});
