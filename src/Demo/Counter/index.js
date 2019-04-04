import React, { Component } from 'react';
import './index.scss';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.oddIncrement = this.oddIncrement.bind(this);
        this.asyncIncrement = this.asyncIncrement.bind(this);
    }

    oddIncrement() {
        if (this.props.score % 2 == 0) {
            this.props.onIncrement();
        }
    }

    asyncIncrement() {
        setTimeout(this.props.onIncrement(), 2000);
    }

    render() {
        const { score, onIncrement, onDecrement } = this.props;
        return (
            <div className="content">
                <div className="special">
                    <div className="operate" onClick={this.oddIncrement}>Increment if odd</div>
                    <div className="operate" onClick={this.asyncIncrement}>Increment async</div>
                </div>
                <div className="operateContainer">
                    <div className="operate" onClick={onDecrement}>-</div>
                    <div className="operate" onClick={onIncrement}>+</div>
                </div>
                <div className="score">{score}</div>
            </div>
        )
    }
}

export default Counter;