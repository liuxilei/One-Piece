import React, { Component } from "react";
import Join from "../Join";
import "./index.scss";
import left from "../Join/left.png";
import right from "../Join/right.png";
import all from "../Join/all.png";
import inside from "../Join/inside.png";

var data = {
    nodes: [
        {
            id: 1,
            label: "测试1"
        },
        {
            id: 2,
            label: "测试2"
        }
    ],
    edges: [
        {
            source: 1,
            target: 2,
            imgSrc: left
        }
    ]
};

class JoinInstance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            joinData: {}
        };
    }

    changeData = () => {
        this.setState(state => ({
            id: state.id + 1,
            joinData: this.randomAddData()
        }))
    }

    randomAddData = () => {
        data.nodes.push({
            id: this.state.id + 1,
            label: `表${this.state.id + 1}`
        });
        return data;
    }

    render() {
        const {
            id,
            joinData,
        } = this.state;
        return (
            <div>
                <div className="add" onClick={this.changeData}>添加一个元素+</div>
                <Join
                    id={id}
                    //joinData={data}
                />
            </div>
        )
    }
}
export default JoinInstance;