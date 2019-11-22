import React, { useState, useCallback } from "react";
import Child from './Child';

export default () => {
    const [title, setTitle] = useState("这是一个 title")

    const callback = () => {
        setTitle("标题改变了");
    };

    const memoizedCallback = useCallback(callback, [])

    return (
        <div className="App">
            <h1>{title}</h1>
            <button onClick={() => setTitle("title 已经改变")}>改名字</button>
            <Child callback={memoizedCallback}></Child>
        </div>
    );
}