import React, { memo, FC } from "react";
import { increment, decrement, asyncIncrement } from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styles from "./index.scss";
import { CounterState } from "../types";

type Props = {
	onIncrement: () => void;
	asyncIncrement: () => void;
	onDecrement: () => any;
	value: number;
	children: React.ReactNode;
}

const Counter: FC<Props> = (props) => {
	const oddIncrement = () => {
		if (props.value % 2 === 0) {
			props.onIncrement();
		}
	};

	const asyncIncrement = () => {
		props.asyncIncrement();
	};

	const { value, onIncrement, onDecrement } = props;
	return (
		<div className={styles.content}>
			<div className="special">
				<div className="operate" onClick={oddIncrement}>
					Increment if odd
				</div>
				<div className="operate" onClick={asyncIncrement}>
					Increment async
				</div>
			</div>
			<div className="operateContainer">
				<div className="operate" onClick={onDecrement}>
					-
				</div>
				<div className="operate" onClick={onIncrement}>
					+
				</div>
			</div>
			<div className="score">{value}</div>
		</div>
	);
}

const mapStateToProps = ({ Counter: CounterState  }) => ({
	value: Counter.value
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			onIncrement: increment,
			onDecrement: decrement,
			asyncIncrement: asyncIncrement,
		},
		dispatch,
	);

export default memo(connect(mapStateToProps, mapDispatchToProps)(Counter));
