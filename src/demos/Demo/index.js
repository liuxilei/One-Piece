import React, { Component } from 'react';

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