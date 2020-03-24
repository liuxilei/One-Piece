import React, { useState } from "react";
import {
    Input,
    Button,
    List,
} from "antd";

const TodoList = () => {
    return (
        <div style={{ marginTop: "10px", marginLeft: "10px" }}>
            <div>
                <Input placeholder="todo Info" style={{ width: "300px", marginRight: "10px" }} />
                <Button>提交</Button>
            </div>
            <List
                style={{ marginTop: "10px", width: "300px"}}
                bordered
                dataSource={[]}
                renderItem={item => (<List.Item>{item}</List.Item>)}
                />
        </div>
    )
}

export default TodoList;