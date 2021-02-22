import React, { useState } from "react";
import SubPage from "./SubPage";
import utils from "../../utils";
import "./index.scss";

const pagesParam = [
	{
		name: "动态页面1",
	},
];

export default () => {
	const [active, setActive] = useState(0);
	const [pages, setPages] = useState(pagesParam);
	const [pageArr, setPageArr] = useState([<SubPage name="动态页面1" />]);
	const add = () => {
		let copyPages = utils.objCopy(pages);
		let copyPageArr = pageArr;
		let length = copyPages.length + 1;
		copyPages.push({
			name: `动态页面${length}`,
		});
		copyPageArr.push(<SubPage name={`动态页面${length}`} />);
		setPages(copyPages);
		setPageArr(copyPageArr);
	};
	return (
		<div className="dynamicTabWrap">
			<button onClick={add}>添加新页面</button>
			<div className="dynamicTab">
				<div className="list">
					{pages.map((item, index) => {
						return (
							<div
								key={item.name}
								onClick={() => setActive(index)}
							>
								{item.name}
							</div>
						);
					})}
				</div>
				<div className="contaner">
					{pageArr.map((item, index) => {
						return (
							<div
								key={index}
								style={{
									display:
										index === active ? "block" : "none",
								}}
							>
								{item}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
