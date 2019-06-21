import React, { Component } from 'react';
import { Resizable } from 'react-resizable';
import { Table } from 'antd';
import "./index.scss";


const ResizeableTitle = props => {
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
                title: 'Date',
                dataIndex: 'date',
                width: 200,
                //fixed: 'left',
            },
            {
                title: 'Amount',
                dataIndex: 'amount',
                width: 100,
                //fixed: 'left',
            },
            {
                title: 'Type',
                dataIndex: 'type',
                width: 100,
                render: (text, record) => (
                    <div style={{ wordWrap: 'break-word', wordBreak: 'break-all' }}>
                        {text}
                    </div>
                ),
            },
            {
                title: 'Note',
                dataIndex: 'note',
                width: 100,
                //fixed: 'right',
                render: (text, record) => (
                    <div style={{ wordWrap: 'break-word', wordBreak: 'break-all' }}>
                        {text}
                    </div>
                ),
            },
            {
                title: 'Action',
                key: 'action',
                //fixed: 'right',
                render: () => <a href="javascript:;">Delete</a>,
            },
        ],
    }

    components = {
        header: {
            cell: ResizeableTitle,
        },
    };

    data = [
        // {
        //     key: 0,
        //     date: '2018-03-11',
        //     amount: 256,
        //     type: 'afadada',
        //     note: 'ygfbbbbbbbbbdfggddddddddddddddddddddddddd',
        // },
        // {
        //     key: 1,
        //     date: '2018-03-11',
        //     amount: 243,
        //     type: 'incomevvvv',
        //     note: 'transferbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
        // },
        // {
        //     key: 2,
        //     date: '2018-04-11dddddddddddd',
        //     amount: 98,
        //     type: 'incometttttttttttttttttttttttttttttttttttttttttttttttttttttt',
        //     note: 'transferccccccccccccccccccccccccccccccccccccc',
        // },
    ];

    handleResize = index => (e, { size }) => {
        this.setState(({ columns }) => {
            const nextColumns = [...columns];
            nextColumns[index] = {
                ...nextColumns[index],
                width: size.width,
            };
            return { columns: nextColumns };
        });
    };

    render() {
        const columns = this.state.columns.map((col, index) => ({
            ...col,
            onHeaderCell: column => ({
                width: column.width,
                onResize: this.handleResize(index),
            }),
        }));
        return (
            <Table
                bordered
                components={this.components}
                columns={columns}
                style={{ width: "300px" }}
                scroll={{ x: 300, y: 300 }}
                //columns={this.state.columns}
                dataSource={this.data}
                pagination={false}
            />

        )
    }
}

export default TableDemo;