import React, { useState, useEffect } from 'react';
import "./index.scss";

//Hook从React16.8.0开始支持

export default () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You click ${count} times`;
    })

    return <div onClick={() => setCount(count + 1)} className="default">
        {count}
    </div>
}