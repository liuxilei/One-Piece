import React, { useState, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./index.scss";

export default () => {
    const [visible, setVisible] = useState(true);
    const [list, setList] = useState([]);
    return (
        <Fragment>
            <CSSTransition
                in={visible}
                timeout={1000}
                classNames="fade"
                unmountOnExit
                onEntered={el => console.log("组件入场结束时候的钩子触发", el)}
                appear //是否第一次展示的时候就显示动画效果
            >
                <div>Hello</div>
            </CSSTransition>
            <button onClick={() => setVisible(!visible)}>toggle</button>



            <hr />
            {/* 对一组元素应用动画 */}
            <TransitionGroup>
                {
                    list.map((item, index) => {
                        return (
                            <CSSTransition
                                key={index}
                                timeout={1000}
                                classNames="fade"
                                unmountOnExit
                                onEntered={el => console.log(el)}
                                appear //是否第一次展示的时候就显示动画效果
                            >
                                <div>{item}</div>
                            </CSSTransition>
                        )
                    })
                }
            </TransitionGroup>
            <button onClick={() => setList([...list, "item"])}>list添加</button>
            <p className="address"><a href="https://github.com/reactjs/react-transition-group" target="_blank" rel="noopener noreferrer">官方地址</a></p>

        </Fragment>
    )
}