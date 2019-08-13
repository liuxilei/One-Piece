import React, { Component } from "react";
import VirtualizedTree from "./VirtualizedTree";

import folderIcon from './VirtualizedTree/folder.svg';
const generateResponse = () => {
    let result = [];

    for (var i = 1; i <= 2000; i++) {
        var node = {
            label: 'Desktop' + i,
            value: String(Math.random(1, 10000) + 1),
            level: 1,
            icon: folderIcon,
            isLeaf: true,
            checked: false,
            disabled: false,
            expanded: false,
            children: []
        };

        result.push(node);
    }

    return result;
}

const nodes = [
    {
        label: 'Quick Configuration',
        value: '0-0',
        level: 0,
        icon: folderIcon,
        isLeaf: false,
        checked: true,
        disabled: false,
        expanded: true,
        children: generateResponse(),
    },
    {
        label: 'My Computer',
        value: '0-1',
        level: 0,
        icon: folderIcon,
        isLeaf: false,
        checked: false,
        disabled: false,
        expanded: true,
        children: [
            {
                label: 'C:/',
                value: '0-1-0',
                level: 1,
                icon: folderIcon,
                isLeaf: false,
                checked: false,
                disabled: false,
                expanded: false,
                children: []
            },
            {
                label: 'E:/',
                value: '0-1-1',
                level: 1,
                icon: folderIcon,
                isLeaf: false,
                checked: false,
                disabled: false,
                expanded: false,
                children: []
            },
        ]
    },
];

class BigTree extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("节点信息", nodes);
    }

    onCheck = (checked, node) => {
        console.log("选中", checked, node);
        this.setState({ checked });
    }

    onExpand = (expanded, loading, node) => {
        console.log("展开:", expanded, ":", loading, ":", node);
        this.setState({ expanded });
    }

    render() {
        return <VirtualizedTree
            nodes={nodes}
            onCheck={this.onCheck}
            onExpand={this.onExpand}
        />
    }
}

export default BigTree;
