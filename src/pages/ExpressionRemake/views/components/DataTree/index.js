import React from "react";
import { Tree } from "antd";
import styles from "./index.less";
import utils from "@/utils";
import { useDrag } from "react-dnd";
const TreeNode = Tree.TreeNode;

const treeData = [
	{
		title: "工程类",
		key: "0-0",
		children: [
			{
				title: "收入",
				key: "0-0-0",
				isLeaf: true,
			},
			{
				title: "成本",
				key: "0-0-1",
				isLeaf: true,
			},
			{
				title: "产地",
				key: "0-0-2",
				isLeaf: true,
			},
			{
				title: "供应商",
				key: "0-0-3",
				isLeaf: true,
			},
		],
	},
	{
		title: "分析类",
		key: "0-1",
		children: [
			{
				title: "时间",
				key: "0-1-0",
				isLeaf: true,
			},
			{
				title: "试点范围",
				key: "0-1-1",
				isLeaf: true,
			},
		],
	},
];

const TitleWrap = ({ titleInfo, addIndex, replaceIndex }) => {
	const [, drag] = useDrag({
		item: { name: titleInfo.title, type: "index", key: titleInfo.key },
		end: (item, monitor) => {
			console.log(monitor);
			const dropResult = monitor.getDropResult();
			if (item && dropResult) {
				//单纯的移入编辑器
				if (dropResult.type === "Editor") {
					addIndex(titleInfo);
					//替换掉已存在的指标
				} else if (dropResult.type === "index") {
					replaceIndex(dropResult.newElement);
				}
			}
		},
		collect: (monitor) => {},
	});
	return (
		<span ref={drag} className={styles.title}>
			{titleInfo.title}
		</span>
	);
};

const TreeData = (props) => {
	const { addIndex, replaceIndex } = props;

	//递归树
	const renderTreeItems = (nodes, level) => {
		return nodes.map((item) => {
			Object.assign(item, { level, type: "index" });
			return (
				<TreeNode
					title={
						item.isLeaf ? (
							<TitleWrap
								titleInfo={item}
								addIndex={addIndex}
								replaceIndex={replaceIndex}
							/>
						) : (
							item.title
						)
					}
					icon={<i className="iconfont icon-wenjianjia" />}
					key={item.key}
				>
					{utils.isExistent(item.children) &&
						renderTreeItems(item.children, level + 1)}
				</TreeNode>
			);
		});
	};

	return (
		<Tree
			className={styles.dataTree}
			showLine={{ showLeafIcon: false }}
			defaultExpandAll
			selectable={false}
		>
			{renderTreeItems(treeData, 0)}
		</Tree>
	);
};

export default TreeData;
