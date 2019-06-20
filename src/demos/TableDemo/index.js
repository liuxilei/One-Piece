import React, { Component } from 'react';
import { Table } from 'antd';

class TableDemo extends Component {
    state = {
        columns: [
            {
                title: 'Date',
                dataIndex: 'date',
                width: 200,
                fixed: 'left',
            },
            {
                title: 'Amount',
                dataIndex: 'amount',
                width: 100,
                fixed: 'left',
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
                fixed: 'right',
                render: (text, record) => (
                    <div style={{ wordWrap: 'break-word', wordBreak: 'break-all' }}>
                        {text}
                    </div>
                ),
            },
            {
                title: 'Action',
                key: 'action',
                fixed: 'right',
                render: () => <a href="javascript:;">Delete</a>,
            },
        ],
    }

    data = [
        {
            key: 0,
            date: '2018-02-11',
            amount: 120,
            type: 'incomeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            note: 'transfer',
        },
        {
            key: 1,
            date: '2018-03-11',
            amount: 243,
            type: 'incomevvvv',
            note: 'transferbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
        },
        {
            key: 2,
            date: '2018-04-11dddddddddddd',
            amount: 98,
            type: 'incometttttttttttttttttttttttttttttttttttttttttttttttttttttt',
            note: 'transferccccccccccccccccccccccccccccccccccccc',
        },
    ];

    render() {
        return (
            <Table
                bordered
                style={{ width: "1200px" }}
                scroll={{ x: 800, y: 300 }}
                columns={this.state.columns}
                dataSource={this.data}
                pagination={false}
            />

        )
    }
}

export default TableDemo;