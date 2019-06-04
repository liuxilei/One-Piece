import React, { Component } from 'react';

class Son extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps);
    }

    render() {
        return (
            <span>{this.props.value}</span>
        )
    }
}

export default Son;