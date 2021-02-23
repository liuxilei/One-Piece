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

interface titleInfoType {
	title: string;
	type: string;
	key: string;
}

interface Props1 {
	titleInfo: titleInfoType;
	addIndex: (titleInfo: titleInfoType) => void;
	replaceIndex: (newElement: Object) => void;
}

const TitleWrap = ({ titleInfo, addIndex, replaceIndex }: Props1) => {
	const [, drag] = useDrag({
		item: { name: titleInfo.title, type: "index", key: titleInfo.key },
		end: (item, monitor) => {
			console.log(item, monitor);
			const dropResult = monitor.getDropResult();
			if (item && dropResult) {
				//单纯的移入编辑器
				console.log(dropResult);
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

interface Props2 {
	addIndex: (titleInfo: titleInfoType) => void;
	replaceIndex: (newElement: Object) => void;
}

const TreeData = (props: Props2) => {
	const { addIndex, replaceIndex } = props;

	//递归树
	const renderTreeItems = (nodes: Object[], level?: number) => {
		return nodes.map((item: any) => {
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
