import React, { Component, Fragment } from "react";
import MemoTest from "./MemoTest";
import PureTest from "./PureTest";

const a = {
    name: "lxl"
}


//

class PureOrMemoTest extends Component {
    state = {
        like: a,
    }

    setLike = () => {
        //!!!!!!!浅比较只比较父组件传递的this.props对象属性的第一层!!!!!

        //pure和memo未更新
        // a.name = "xadad"
        // this.setState({
        //     like: a
        // });

        //pure和memo更新
        this.setState({
            like: ""
        });
    }

    render() {
        console.log("父组件渲染")
        return (
            <Fragment>
                <span onClick={this.setLike}>更改state {this.state.like.name}</span>
                <MemoTest a={this.state.like} />
                <PureTest a={this.state.like} />
            </Fragment>
        )
    }
}
export default PureOrMemoTest;