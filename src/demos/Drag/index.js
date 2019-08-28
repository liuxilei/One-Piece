import React, { Component, Fragment } from "react";

class Drag extends Component {
    dragStart = (e) => {
        console.log("拖动前", e.target);
    }

    dragEnd = (e) => {
        console.log("拖动后", e.target);
    }

    dragEnter = (e) => {
        console.log("有人把东西拖动进入我这里了，但拖动还不一定结束，也可能继续拖动出我这里", e.target)
    }

    dragLeave = (e) => {
        console.log("有人把东西拖动我这里又拖出去了");
    }

    dragOver = (e) => {
        console.log("被拖动的元素还在放置目标的范围内移动时", e.target)
    }

    drag = (e) => {
        console.log("如果元素被放到放置目标中触发")
    }

    render() {
        return (
            <Fragment>
                <div
                    style={{ width: "50px", height: "50px", background: "#000" }}
                    draggable
                    onDragStart={(e) => this.dragStart(e)}
                    onDragEnd={(e) => this.dragEnd(e)}>
                </div>
                <div  
                    onDragEnter={(e) => this.dragEnter(e)}
                    onDragLeave={e => this.dragLeave(e)}
                    onDragOver={(e)=>this.dragOver(e)}
                    onDrag={(e)=>this.drag(e)}
                    style={{ width: "50px", height: "50px", background: "red",marginLeft:"200px",marginTop:"50px"}}></div>
            </Fragment>

        )
    }
}

export default Drag;