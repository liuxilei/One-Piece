import React, { memo } from 'react';
import { increment, decrement, asyncIncrement } from '../actions';
import { connect } from 'react-redux';
import './index.scss';

function Counter(props) {
    const oddIncrement = () => {
        if (props.value % 2 === 0) {
            props.onIncrement();
        }
    }

    const asyncIncrement = () => {
        props.asyncIncrement();
    }

    const {
        value,
        onIncrement,
        onDecrement
    } = props;
    return (
        <div className="content">
            <div className="special">
                <div className="operate" onClick={oddIncrement}>Increment if odd</div>
                <div className="operate" onClick={asyncIncrement}>Increment async</div>
            </div>
            <div className="operateContainer">
                <div className="operate" onClick={onDecrement}>-</div>
                <div className="operate" onClick={onIncrement}>+</div>
            </div>
            <div className="score">{value}</div>
        </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(memo(Counter));