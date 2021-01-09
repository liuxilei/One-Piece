import React from "react";
import { Tabs, Menu, Dropdown } from "antd";
import DraggableTabs from "./DraggableTabs";
import "./index.css";

const { TabPane } = Tabs;

function callback(key) {
	console.log(key);
}

const menu = (
	<Menu className="tabsContext">
		<Menu.Item key="1">1st menu item</Menu.Item>
		<Menu.Item key="2">2nd menu item</Menu.Item>
		<Menu.Item key="3">3rd menu item</Menu.Item>
	</Menu>
);

const renderTitle = (title) => (
	<Dropdown overlay={menu} trigger={["contextMenu"]} placement="topLeft">
		<span style={{ userSelect: "none" }}>{title}</span>
	</Dropdown>
);

const contents = [
	{
		title: "选项卡1",
		key: "1",
		content: <div style={{ height: "500px" }}>内容一</div>,
	},
	{
		title: "选项卡2",
		key: "2",
		content: <div style={{ height: "500px" }}>内容二</div>,
	},
	{
		title: "选项卡3",
		key: "3",
		content: <div style={{ height: "500px" }}>内容三</div>,
	},
];

const TabsContext = () => {
	return (
		<DraggableTabs
			defaultActiveKey="1"
			onChange={callback}
			tabPosition="bottom"
			animated={false}
			tabBarGutter={0}
			type="card"
		>
			{contents.map((item) => {
				return (
					<TabPane tab={renderTitle(item.title)} key={item.key}>
						{item.content}
					</TabPane>
				);
			})}
		</DraggableTabs>
	);
};

export default TabsContext;
