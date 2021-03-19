import { Component } from "react";
import Join from "../Join";
import styles from "./index.less";

class JoinInstance extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: 0,
			data: {
				nodes: [],
				edges: [],
			},
		};
	}

	changeData = () => {
		this.setState((state) => ({
			id: state.id + 1,
			data: {
				nodes: [
					...state.data.nodes,
					{
						id: `${state.id + 1}`,
						label: `表${state.id + 1}`,
					},
				],
				edges: state.data.edges,
			},
		}));
	};

	setData = (data) => {
		this.setState({
			data,
		});
	};

	render() {
		const { data } = this.state;
		return (
			<div>
				<div className={styles.add} onClick={this.changeData}>
					添加一个元素+
				</div>
				<Join
					data={data}
					setData={this.setData}
					history={this.props.history}
					width={1600}
					height={800}
				/>
			</div>
		);
	}
}
export default JoinInstance;
