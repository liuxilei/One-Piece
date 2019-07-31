import React, { Component } from 'react';
import Tree from 'react-virtualized-tree';
import 'react-virtualized/styles.css';
import 'react-virtualized-tree/lib/main.css';

const { renderers } = Tree;

const nodes = [
    {
        id: 3,
        name: 'Leaf 3',
        state: {
            expanded: false,
            favorite: true,
            deletable: true,
        },
        children: [
            {
                id: 'c-3',
                name: 'Leaf 3 Child',
                state: {},
            },
        ],
    }
];

class BigTree extends Component {
    constructor(props) {
        super(props);
    }

    handleChange = () => {

    }

    render() {
        return (
            <Tree
                nodes={nodes}
            ></Tree>
        )
    }
}

export default BigTree;