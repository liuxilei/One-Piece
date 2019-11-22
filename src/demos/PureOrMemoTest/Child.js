import React, { memo } from "react";

const Child = memo(() => {
    console.log("子组件在渲染了");
    return (
        <div>1111</div>
    )
});

export default Child;
