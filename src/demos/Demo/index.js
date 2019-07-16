import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: []
        }
    }

    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>这是更改后的标题</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                {
                    this.state.value.map(item => {
                        return <div>{item.name}</div>
                    })
                }
            </div>
        )
    }
}

export default Demo;