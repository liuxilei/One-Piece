import React, { Component } from 'react';
import { increment, decrement, asyncIncrement } from '../actions';
import { connect } from 'react-redux';
import './index.scss';

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    oddIncrement = () => {
        if (this.props.value % 2 === 0) {
            this.props.onIncrement();
        }
    }

    asyncIncrement = () => {
        this.props.asyncIncrement();
    }

    render() {
        const { 
            value, 
            onIncrement, 
            onDecrement 
        } = this.props;
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
                <div className="score">{value}</div>
            </div>
        )
    }
}

const mapStateToProps = ({ Counter }) => ({
    value: Counter.value
});

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => {
            dispatch(increment());
        },
        onDecrement: () => {
            dispatch(decrement());
        },
        asyncIncrement: () => {
            dispatch(asyncIncrement());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);