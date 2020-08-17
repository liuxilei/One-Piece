import React, { Component } from "react";
import { Resizable } from "react-resizable";
import { Table, Modal } from "antd";
import "./index.scss";

const ResizeableTitle = (props) => {
	const { onResize, width, ...restProps } = props;

	if (!width) {
		return <th {...restProps} />;
	}

	return (
		<Resizable width={width} height={0} onResize={onResize}>
			<th {...restProps} />
		</Resizable>
	);
};
class TableDemo extends Component {
	state = {
		columns: [
			{
				title: "Date",
				dataIndex: "date",
				width: 200,
				//fixed: 'left',
			},
			{
				title: "Amount",
				dataIndex: "amount",
				width: 100,
				//fixed: 'left',
			},
			{
				title: "Type",
				dataIndex: "type",
				width: 100,
				render: (text, record) => (
					<div
						style={{
							wordWrap: "break-word",
							wordBreak: "break-all",
						}}
					>
						{text}
					</div>
				),
			},
			{
				title: "Note",
				dataIndex: "note",
				width: 100,
				//fixed: 'right',
				render: (text, record) => (
					<div
						style={{
							wordWrap: "break-word",
							wordBreak: "break-all",
						}}
					>
						{text}
					</div>
				),
			},

			{
				title: "xxx",
				dataIndex: "xxx",
				width: 100,
				//fixed: 'right',
			},
			{
				title: "xxx1",
				dataIndex: "xxx1",
				width: 100,
				//fixed: 'right',
			},
			{
				title: "xxx2",
				dataIndex: "xxx2",
				width: 100,
				//fixed: 'right',
			},
			{
				title: "xxx3",
				dataIndex: "xxx3",
				width: 100,
				//fixed: 'right',
			},

			{
				title: "xxx4",
				dataIndex: "xxx4",
				width: 100,
				//fixed: 'right',
			},
			{
				title: "Action",
				key: "action",
				//fixed: 'right',
				render: () => <a href="javascript:;">Delete</a>,
			},
		],
	};

	components = {
		header: {
			cell: ResizeableTitle,
		},
	};

	data = [
		{
			key: 0,
			date: "2018-03-11",
			amount: 256,
			type: "afadada",
			note: "ygfbbbbbbbbbdfggddddddddddddddddddddddddd",
			xxx: 12131,
			xxx1: 12131,
			xxx2: 12131,
			xxx3: 12131,
			xxx4: 12131,
		},
		{
			key: 1,
			date: "2018-03-11",
			amount: 243,
			type: "incomevvvv",
			note:
				"transferbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
			xxx: 12131,
			xxx1: 12131,
			xxx2: 12131,
			xxx3: 12131,
			xxx4: 12131,
		},
		{
			key: 2,
			date: "2018-04-11dddddddddddd",
			amount: 98,
			type:
				"incometttttttttttttttttttttttttttttttttttttttttttttttttttttt",
			note: "transferccccccccccccccccccccccccccccccccccccc",
			xxx: 12131,
			xxx1: 12131,
			xxx2: 12131,
			xxx3: 12131,
			xxx4: 12131,
		},
	];

	handleResize = (index) => (e, { size }) => {
		this.setState(({ columns }) => {
			const nextColumns = [...columns];
			nextColumns[index] = {
				...nextColumns[index],
				width: size.width,
			};
			return { columns: nextColumns };
		});
	};

	componentDidMount() {
		document.addEventListener("keydown", this.onKeyDown);
	}

	//键盘按键
	onKeyDown = (e) => {
		if (e.keyCode === 119) {
			//console.log(1);
		} else if (e.keyCode === 120) {
			//console.log(2);
		}
		//console.log(e);
	};

	render() {
		const columns = this.state.columns.map((col, index) => ({
			...col,
			onHeaderCell: (column) => ({
				width: column.width,
				onResize: this.handleResize(index),
			}),
		}));
		return (
			<Modal
				visible={true}
				width={600}
				height={800}
				style={{ position: "relative" }}
			>
				{/* <div
                        style={{
                            width: '200px',
                            height: '150px',
                            overflowY: 'auto'
                        }}
                        >
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                            <p>1111</p>
                    </div> */}
				<Table
					bordered
					components={this.components}
					columns={columns}
					style={{ width: "500px" }}
					scroll={{ x: "max-content", y: 400 }}
					//columns={this.state.columns}
					dataSource={this.data}
					pagination={false}
				/>
			</Modal>
		);
	}
}

export default TableDemo;
