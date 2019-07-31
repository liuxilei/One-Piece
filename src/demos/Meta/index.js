import React, { Component } from 'react';
import { Helmet } from "react-helmet";

export default () => (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>这是更改后的标题</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
    </div>
)