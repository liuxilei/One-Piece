import React, { memo, FC } from "react";
import { increment, decrement, asyncIncrement } from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Content, OperateContainer, Score, Special, Operate } from "./style";
import { AppState } from "@/store";
import { Dispatch } from 'redux';

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
		<Content>
			<Special>
				<Operate fontSize={25} onClick={oddIncrement} >
					Increment if odd
				</Operate>
				<Operate fontSize={25} onClick={asyncIncrement} >
					Increment async
				</Operate>
			</Special>
			<OperateContainer>
				<Operate fontSize={33} onClick={onDecrement}>
					-
				</Operate>
				<Operate fontSize={33} onClick={onIncrement}>
					+
				</Operate>
			</OperateContainer>
			<Score>{value}</Score>
		</Content>
	);
}

const mapStateToProps = ({ Counter }: AppState) => ({
	value: Counter.value
});

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(
		{
			onIncrement: increment,
			onDecrement: decrement,
			asyncIncrement: asyncIncrement,
		},
		dispatch,
	);

export default memo(connect(mapStateToProps, mapDispatchToProps)(Counter));
