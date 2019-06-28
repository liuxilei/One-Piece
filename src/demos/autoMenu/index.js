import React, { Component, Fragment } from 'react';


const data = [
    {
        name: "零售解决方案",
        type: 1,
        children: [{
            name: "线下零售业",
            type: 2,
            children: [
                {
                    name: "无人售货解决方案"
                }
            ]
        }]
    },
]
class AutoMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>

            </Fragment>
        )
    }
}

export default AutoMenu;