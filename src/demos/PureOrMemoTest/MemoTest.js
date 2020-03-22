import React, { memo } from "react";

export default memo(() => {
    console.log("memo渲染")
    return (
        <div>Memo组件浅比较测试</div>
    )
});